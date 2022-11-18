import {Component, Injectable, Input, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.scss']
})

export class ShowPatientComponent implements OnInit {

  constructor(private service:SharedService) { }

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
        })

    }catch(err){
      console.log(err)
    }
  }
  refreshPatientList(){
    this.service.getPatientList().subscribe(data => {
      this.loading = false;
      this.PatientList = data;
      for (var i = 0; i < data.length;i++)
        data[i].cpf = data[i].cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    })
  }



}
