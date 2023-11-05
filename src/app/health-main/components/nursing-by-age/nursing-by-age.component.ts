
import { Component, ElementRef, OnInit } from '@angular/core';

import * as echarts from "echarts";
import uniqeBy, { uniqBy } from 'lodash'
// var echarts = require('echarts')

import $ from 'jquery';
import { HealthService } from '../../health-service';
@Component({
  selector: 'app-nursing-by-age',
  templateUrl: './nursing-by-age.component.html',
  styleUrls: ['./nursing-by-age.component.scss']
})

export class NursingByAgeComponent 
  implements OnInit {
    // data Structure for Series
    
    // @Input() name: string;
    // @Input() data:any;
    series:any[]=[];
    legends:any[]=[];
    divElement:HTMLDivElement|null = null

    constructor(private elm:ElementRef,private healthService:HealthService){}
   
    ngOnInit(){

      
       let allData =this.healthService.getNursingByYearData()
       
       let category:number[] =uniqBy(allData, 'age').map(x=>x.age).filter((value): value is number => value !== null && value != undefined)
       console.log(category)
       let dataPoints1 = allData.filter(f=>f.measure=='הנקה מלאה' ).map(s=>s.populationRate)
       
     
      let dataPoints2 = allData.filter(f=>f.measure=='הנקה משולבת').map(s=>s.populationRate)
      let dataPoints3 = allData.filter(f=>f.measure=='ללא הנקה').map(s=>s.populationRate)

       let data=[{  
        legend:"הנקה מלאה",
        dataPoints:dataPoints1
      },{
        legend:"הנקה משולבת",
        dataPoints:dataPoints2
      },{
        legend:"ללא הנקה",
        dataPoints:dataPoints3
      },
      ];

     


       this.divElement = document.querySelector('.nursing-by-age');
      if(this.divElement)
      {
      let stackchart = echarts.init(this.divElement);

      
      data.forEach(x=>{
        this.series.push({
          name:x.legend,
         
          symbolSize: 15,
          type:'line',
          stack: 'Total',
          
          areaStyle:{normal:{}},
          showSymbol: false,
         
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
            interval: 20
            
          }
        ],
        series: this.series,
      },
     
      )
      //console.log(this.divElement.closest(outerHeight != 0))
      //console.log(this.divElement.parentElement?.parentElement?.clientWidth)

     // stackchart.resize({width:this.divElement.clientHeight,height:this.divElement.clientHeight})
    }
    }
  }


