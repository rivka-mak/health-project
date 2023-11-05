import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthHomeComponent } from './health-main/components/health-home/health-home.component';
import { NursingYearsByAgeComponent } from './health-main/components/nursing-years-by-age/nursing-years-by-age.component';
import { NursingByAgeComponent } from './health-main/components/nursing-by-age/nursing-by-age.component';
import { SurveyPatientComponent } from './health-main/components/survey-patient/survey-patient.component';

const routes: Routes = [
{ path: '', component: HealthHomeComponent },
{ path: 'report1', component: NursingYearsByAgeComponent },
{ path: 'report2', component: NursingByAgeComponent },
{ path: 'report3', component: SurveyPatientComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
