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
  caiqueProfileImage:string = "https://avatars.githubusercontent.com/u/106355258?v=4";
  caiqueName:string = "Caique Gomes"

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
      linkGit: 'https://github.com/caiquegomes'
    }]
  }

  ngOnInit(): void {
    this.loadAllProfile()
  }

}
