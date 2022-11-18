import {Component, Injectable, Input, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.scss']
})

export class ShowPatientComponent implements OnInit {

  constructor(private service:SharedService, private messageService: MessageService) { }

  displayAdd: boolean = false;
  displayEdit: boolean = false;
  patient: any;
  PatientList: any = [];
  loading: boolean = true;

  addClick(){
    this.displayAdd = true;
  }

  ngOnInit(): void {
    this.refreshPatientList();
  }

  close(){
    this.displayAdd = false;
    this.displayEdit = false;
    this.refreshPatientList();
  }

  editPatient(edit: any){
    this.displayEdit = true;
    edit.cpf = edit.cpf.replaceAll('.','').replaceAll('-','');
    this.patient = edit;
  }

  deletePatient(del: any){
    del = del.replaceAll('.','').replaceAll('-','');
    try {
        this.service.deletePatientList(del).subscribe(data => {
          this.refreshPatientList();
          this.showSuccess();
        })

    }catch(err){
      this.showError();
    }
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Deletado com sucesso'});
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'error', detail: 'Erro ao Deletar'});
  }

  refreshPatientList(){
    this.service.getPatientList().subscribe(data => {
      this.loading = false;
      this.PatientList = data;
      for (let i = 0; i < data.length;i++){
        data[i].cpf = data[i].cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        data[i].tel = data[i].tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        data[i].emergency_tel = data[i].emergency_tel.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
      }
    })
  }



}
