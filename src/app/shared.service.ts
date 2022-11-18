import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  readonly APIUrl = 'https://patient-manager-wyden.herokuapp.com';

  constructor(private http:HttpClient){}

  getPatientList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/patients/')
  }

  addPatientsList(val:any){
    return this.http.post(this.APIUrl + '/patients/',val)
  }

  updatePatientsList(val:any,cpf:any){
    return this.http.patch(this.APIUrl + '/patients/'+cpf,val)
  }

  deletePatientList(val:any){
    return this.http.delete(this.APIUrl + '/patients/'+val)
  }

}