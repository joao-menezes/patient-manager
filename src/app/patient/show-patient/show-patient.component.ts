import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.scss'],
  providers: [ConfirmationService, MessageService]
})

export class ShowPatientComponent implements OnInit {

  constructor(private service:SharedService, private messageService: MessageService,private confirmationService: ConfirmationService) { }

  displayAdd: boolean = false;
  displayEdit: boolean = false;
  patient: any;
  PatientList: any = [];
  loading: boolean = true;
  isTopButtonVisible:boolean = false;

  addClick(){
    this.displayAdd = true;
  }

  ngOnInit(): void {
    window.onscroll = () => {
      this.scrollFunction()
    }
    this.refreshPatientList();
  }

  scrollFunction(){
      this.isTopButtonVisible = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

  deletePatient(event: any, cpf:any){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.service.deletePatientList(cpf.replaceAll('.','').replaceAll('-','')).subscribe(() => {
            this.refreshPatientList();
            this.showSuccess();
          },err => {
            this.showError()
          })
      },
      reject: () => {
        this.showInfo();
      }
    });
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Successo', detail: 'Deletado com sucesso'});
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'erro', detail: 'Erro ao Deletar'});
  }

  showInfo(){
    this.messageService.add({severity:'info', summary: 'Ação', detail: 'Operação Cancelada'});
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
