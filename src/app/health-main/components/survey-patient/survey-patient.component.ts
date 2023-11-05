import { Component, ElementRef, OnInit } from '@angular/core';
import { HealthService } from '../../health-service';
import uniqeBy, { uniqBy,sortBy, orderBy } from 'lodash'
import * as echarts from "echarts";

@Component({
  selector: 'app-survey-patient',
  templateUrl: './survey-patient.component.html',
  styleUrls: ['./survey-patient.component.scss']
})

export class SurveyPatientComponent implements OnInit {
 
  series: any[] = [];
  legends: any[] = [];
  divElement: HTMLDivElement | null = null

  chartOptions: any;
  //data: any[] =[];

  constructor(private elm: ElementRef, private healthService: HealthService) { }

  ngOnInit() {

    let allData = orderBy(this.healthService.getSurveyPatientExperienceVariables(),'order','desc').filter(x=>x.comparisonGroup=="גודל מוסד")
    console.log(allData)
    let values =uniqBy(allData, 'subject')
    console.log(values)
    console.log(sortBy(values,'order','DESC'))
    let category: string[] = orderBy(uniqBy(allData, 'subject'),'order','desc').map(x => x.subject).filter((value): value is string => value !== '' && value != undefined)
   
    console.log(category)


    
       let data = [
        {
          legend: "קטנים",
          dataPoints: allData.filter(x => x.comparisonValue == "קטנים").map(x=>x.avgDiff)
         },{
       legend: "מרכז על",
       dataPoints: allData.filter(x => x.comparisonValue == "מרכז על").map(x=>x.avgDiff)
      } ,
        {
        legend: "בינוניים - גדולים",
        dataPoints: allData.filter(x => x.comparisonValue == "בינוניים - גדולים").map(x=>x.avgDiff)
       }]
     console.log(data)
     
      this.divElement = document.querySelector('.survey-patient');
      if (this.divElement) {
        let stackchart = echarts.init(this.divElement);
        

console.log(data)


      data.forEach(x=>{
        this.series.push({
          name:x.legend,
          symbolSize: 15,
          type:'bar',
        
          areaStyle:{normal:{}},
          showSymbol: false,
        
          data:x.dataPoints
          })
          this.legends.push(x.legend)
        
      })

      stackchart.setOption( {
          xAxis: {
            type: 'category',
            data: category
          },
          legend:{data:this.legends},
          grid: {
          left: '10%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
          yAxis: {
            type: 'value',
            interval: 5
          },
        
          series: 
               this.series
        }
      );





    }

  
}


}