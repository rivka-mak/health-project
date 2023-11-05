import { Component, ElementRef, OnInit } from '@angular/core';

import * as echarts from "echarts";
import uniqeBy, { uniqBy } from 'lodash'
// var echarts = require('echarts')

import $ from 'jquery';
import { HealthService } from '../../health-service';
@Component({
  selector: 'app-nursing-years-by-age',
  templateUrl: './nursing-years-by-age.component.html',
  styleUrls: ['./nursing-years-by-age.component.scss']
 
})

export class NursingYearsByAgeComponent 
  implements OnInit {
    // data Structure for Series
    
    // @Input() name: string;
    // @Input() data:any;
    series:any[]=[];
    legends:any[]=[];
    divElement:HTMLDivElement|null = null

    constructor(private elm:ElementRef,private healthService:HealthService){}
    getAllBabies(allData:any[],year:number,measure:string):number
    {
      return allData.filter(y=>y.year==year && y.measure == measure).map(c=>c.count).reduce((sum, p) => sum + p)
    }
    ngOnInit(){

      






      
      
       let allData =this.healthService.getNursingByYearData().filter(f=>f.year!= null&& f.measure == "הנקה מלאה")
       
       let category:number[] =uniqBy(allData, 'year').map(y=>y.year).filter((value): value is number => value !== null)
       let dataPoints1 = allData.filter(f=>f.age==1 ).map(s=>s.populationRate)
       
     
      let dataPoints3 = allData.filter(f=>f.age==3).map(s=>s.populationRate)
      let dataPoints6 = allData.filter(f=>f.age==6).map(s=>s.populationRate)
      let dataPoints12 = allData.filter(f=>f.age==12).map(s=>s.populationRate)

       let data=[{  
        legend:"1",
        dataPoints:dataPoints1
      },{
        legend:"3",
        dataPoints:dataPoints3
      },{
        legend:"6",
        dataPoints:dataPoints6
      },
      {
        legend:"12",
        dataPoints:dataPoints12
      }];

    


       this.divElement = document.querySelector('.nursing-years-by-age');
      if(this.divElement)
      {
      let stackchart = echarts.init(this.divElement);
      
      data.forEach(x=>{
        this.series.push({
          name:x.legend,
          symbolSize: 10,
          type:'line',
         
          data:x.dataPoints
          })
          this.legends.push(x.legend)
        
      })
  
      stackchart.setOption({
        tooltip:{
          trigger:'axis',
          axisPointer:{
            type:'cross',
            label:{backgroundColor:'#6a7985'}
          }
        },
     
         legend:{data:this.legends},
         grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          containLabel: true
      
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data:category

          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 15
            
          }
        ],
       
        
        series: this.series,
      },
     
      )
     // stackchart.resize({width:this.divElement.clientHeight,height:this.divElement.clientHeight})
    }
    }
  }


