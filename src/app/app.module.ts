import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NursingYearsByAgeComponent } from './health-main/components/nursing-years-by-age/nursing-years-by-age.component';
import { SideMenuComponent } from './health-main/components/side-menu/side-menu.component';
import { HealthHomeComponent } from './health-main/components/health-home/health-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HealthService } from './health-main/health-service';
import { NursingByAgeComponent } from './health-main/components/nursing-by-age/nursing-by-age.component';
import { SurveyPatientComponent } from './health-main/components/survey-patient/survey-patient.component';
import { HeaderComponent } from './health-main/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NursingYearsByAgeComponent,
    HealthHomeComponent,
    NursingByAgeComponent,
    SurveyPatientComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 SideMenuComponent,
 HttpClientModule,

   
  ],
  providers: [HealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
