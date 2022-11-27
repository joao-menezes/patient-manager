import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  // readonly APIUrl = 'https://patient-manager-wyden.herokuapp.com';
  readonly APIUrl = 'https://patient-manager-wyden.up.railway.app';

  constructor(private http:HttpClient){}

  getPatientList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/patients/?skip=0&limit=50')
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
