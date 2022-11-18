import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientComponent} from './patient/patient.component';
import {ShowPatientComponent} from './patient/show-patient/show-patient.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {AboutComponent} from './about/about.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from "primeng/dialog";
import {AddPatientComponent} from './add-patient/add-patient.component';
import {CardModule} from "primeng/card";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ToastModule} from "primeng/toast";
import {NotFoundErrorComponent} from './not-found-error/not-found-error.component';
import {HomeComponent} from './home/home.component';
import {AccordionModule} from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from "primeng/dropdown";
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    ShowPatientComponent,
    NavbarComponent,
    AboutComponent,
    AddPatientComponent,
    NotFoundErrorComponent,
    HomeComponent,
    EditPatientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CardModule,
    InputMaskModule,
    InputTextModule,
    CalendarModule,
    ToastModule,
    AccordionModule,
    RadioButtonModule,
    DropdownModule,
    TooltipModule,
    RippleModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
