import { Component, ElementRef, OnInit } from '@angular/core';
import { HealthService } from '../../health-service';

@Component({
  selector: 'app-health-home',
  templateUrl: './health-home.component.html',
  styleUrls: ['./health-home.component.scss']
})
export class HealthHomeComponent implements OnInit {
 

  constructor(private healthService:HealthService){}
 
  ngOnInit(){
    
  }

}
