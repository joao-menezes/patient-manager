import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../shared.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  @Output() display: EventEmitter<boolean> = new EventEmitter();
  @Input() patient: any = [];
  bloodType: BloodTypeInterface[];
  selectedSex: string;
  selectedDate: string;
  selectedBloodType: BloodTypeInterface;
  PatientList: any = [];
  windowName: string = ''

  patientFields = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    birth_date: new FormControl(''),
    sex: new FormControl(''),
    tel: new FormControl(''),
    emergency_tel: new FormControl(''),
    blood_group: new FormControl(''),
    weight: new FormControl(),
    height: new FormControl(),
  });

  ngOnInit(): void {}

  get first_name(): any { return this.patientFields.get('first_name'); }
  get last_name(): any { return this.patientFields.get('last_name'); }
  get email(): any { return this.patientFields.get('email'); }
  get birth_date(): any { return this.patientFields.get('birth_date'); }
  get sex(): any { return this.patientFields.get('sex'); }
  get tel(): any { return this.patientFields.get('tel'); }
  get emergency_tel(): any { return this.patientFields.get('emergency_tel'); }
  get blood_group(): any { return this.patientFields.get('blood_group'); }
  get weight(): any { return this.patientFields.get('weight'); }
  get height(): any { return this.patientFields.get('height'); }

  constructor(private service: SharedService,private messageService: MessageService) {
    this.bloodType = [
      { code:''   },
      { code:'A+' },
      { code:'A-' },
      { code:'B+' },
      { code:'AB+'},
      { code:'AB-'},
      { code:'O+' },
      { code:'O-' },
    ]
  }

  editPatient(){

    // if(this.patientFields.value.birth_date === undefined){
    //   this.patientFields.value.birth_date = null
    // }else{
    //   this.patientFields.value.birth_date = new Date(this.patientFields.value.birth_date).toISOString();
    // }
    //

    //
    // if(this.patientFields.value.email === ''){
    //   this.patientFields.value.email = null
    // }else{
    //   this.patientFields.value.email;
    // }

    // if(this.patientFields.value === undefined || this.patientFields.value === null || this.patientFields.value === ''){
    //   this.first_name.setValue(null);
    // }

    for(let field in this.patientFields.value){
      if(this.patientFields.value[field] === null || this.patientFields.value[field] === undefined || this.patientFields.value[field] === ''){
        this.patientFields.value[field] = null
      }
    }

    if(this.patientFields.value.blood_group === undefined || this.patientFields.value.blood_group === null){
      this.patientFields.value.birth_date = null
    }else{
      this.patientFields.value.blood_group = this.selectedBloodType.code;
    }

    try {
      this.service.updatePatientsList(this.patientFields.value,this.patient.cpf).subscribe(res => {
        this.showSuccess();
        this.refreshPatientList();
        this.display.emit(false);
        this.patientFields.reset();
      })
    }catch (err) {
      this.showError()
      console.log("Erro: ",err,'\n','Valores: ',this.patientFields.value)
    }

  }

  close(){
    this.display.emit(false)
    this.patientFields.reset()
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Alterado com sucesso'});
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'error', detail: 'Erro ao alterar'});
  }

  refreshPatientList(){
    this.service.getPatientList().subscribe(data => {
      this.PatientList = data;
    })
  }
}
