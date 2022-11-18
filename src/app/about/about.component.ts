import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  profileCard:any = [];
  yyyy = new Date().getFullYear();

  joaoProfileImage:string = "https://avatars.githubusercontent.com/u/60220208?v=4";
  joaoName:string = "Joao Menezes"
  rianProfileImage:string = "https://avatars.githubusercontent.com/u/88293711?v=4";
  rianName:string = "Rian Gabriel"
  caiqueProfileImage:string = "https://teams.microsoft.com/api/mt/part/amer-03/beta/users/8:orgid:1bc57975-1f5e-48f3-8251-f0ae83539f9f/profilepicturev2?displayname=CAIQUE%20GOMES%20BETTI&size=HR96x96";
  caiqueName:string = "Caique!"

  loadAllProfile(){
    this.profileCard = [
      ...this.loadJoao(),
      ...this.loadRian(),
      ...this.loadCaique()
    ]
  }

  loadJoao(){
    return [{
      image: this.joaoProfileImage,
      name: this.joaoName,
      linkGit: 'https://github.com/joao-menezes'
    }]
  }

  loadRian(){
    return [{
      image: this.rianProfileImage,
      name: this.rianName,
      linkGit: 'https://github.com/rianito'
    }]
  }

  loadCaique(){
    return [{
      image: this.caiqueProfileImage,
      name: this.caiqueName,
      linkGit: ''
    }]
  }

  ngOnInit(): void {
    this.loadAllProfile()
  }

}
