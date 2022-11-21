import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from "../shared.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {

  bloodType: BloodTypeInterface[];
  selectedSex: string;
  selectedDate: Date;
  selectedBloodType: BloodTypeInterface;
  @Output() display: EventEmitter<boolean> = new EventEmitter();

  patientFields = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    birth_date: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    emergency_tel: new FormControl('', Validators.required),
    blood_group: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
  });

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

  ngOnInit(): void {}

  addPatient(){
    console.log(this.selectedDate)
    // this.patientFields.value.birth_date = new Date(this.patientFields.value.birth_date).toISOString();
      try {
        this.patientFields.value.blood_group = this.patientFields.value.blood_group.code
        this.patientFields.value.cpf = this.patientFields.value.cpf.replaceAll('.','').replaceAll('-','')
        this.service.addPatientsList(this.patientFields.value).subscribe(() => {
          this.showSuccess()
          this.patientFields.reset()
        })
      }catch (err) {
        this.showError()
      }
  }

  close(){
    this.display.emit(false)
    this.patientFields.reset()
  }

  refreshForm(){
    this.patientFields.reset()
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Cadastrado com sucesso'});
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'error', detail: 'Erro ao cadastrar verifique os campos'});
  }

  validateForm(): boolean{
    return this.patientFields.valid;
  }

}
