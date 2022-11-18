import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label:'Home',
        routerLink:'/'
      },
      {
        label: 'Listagem',
        icon:'pi pi-list',
        routerLink:'show-patient',
      },
      {
        label: 'Sobre',
        icon: 'pi pi-info',
        routerLink:'about'
      }
    ]

  }
}

