import React, {useEffect} from 'react'
import "./Scatteredplot.css"
import * as echarts from 'echarts';
import data from "../../Wine-Data.json"






const Scatteredplot = () => {


 
  function s(){
    
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    
    option = {
      xAxis: { type: 'value',
      name: 'Color Intensity',
      min: 0,
      max: 5,
      position: 'left',
    
      // axisLabel: {
      //   formatter: '{value} °C'}},
    },
      yAxis: {
        type: 'value',
      name: 'Hue',
      min: 0,
      max:15,
      position: 'left',
      // axisLabel: {
      //   formatter: '{value} °C'}
       } ,
      series: [
        {
          symbolSize: 10,
         data:
        data.map((element,index)=>{
          return [data[index].Color_intensity,data[index].Hue]             //   map will return the copy of array that why we use 
        }),                          //x axis ,y-axis-
     

          type: 'scatter'
        }
      ]
    }
    
    option && myChart.setOption(option);
    }
    
    useEffect(() => {
      s()
    
      
    }, )

  return (
<>
<div id="main"></div> 
</>
  )
}

export default Scatteredplot