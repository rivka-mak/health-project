import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import * as nursingData from './data.json';
import * as SurveyPatientData from './data1.json';

@Injectable() 
export class HealthService {
  private apiUrl = 'https://datadashboard.health.gov.il/api/checkup/nursing'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  getNursingByYearData()
  {
   
   const dataArray = Object.values(nursingData);
   console.log(dataArray); 
   return dataArray
  }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
    
  }
  
  getSurveyPatientExperienceVariables()
  {
   
   const dataArray = Object.values(SurveyPatientData);
   console.log(dataArray); 
   return dataArray
  }
 

}