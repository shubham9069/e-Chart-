import React,{useEffect} from 'react'
import "./barchart.css"
import * as echarts from 'echarts';
import data from "../../Wine-Data.json"

const Barchart = () => {

  var arrmalic=[];
  data.forEach((element,index)=>{
    var item =data[index].Alcohol               // its give the array  arrmallic which contain all alcohol into wine data include alcohol 1,2,3
    arrmalic.push(item)                         // bute there is also a duplicase of data we will remove 
  })
  var arr = arrmalic.filter((element,index)=>{                  // its remove duplicase of a array 
    return arrmalic.indexOf(element) === index                  // in this methode i am bit confuse so i have to go throught this methode on internet 
    
  })



  var avgarr=[]               // gives avg of malic acid 
  
  var sum=0;
  var count=1
  
          // its containe only alc1holic 3 malic acid data 
  
  arr.forEach((elementA,indexA)=>{        // lop for alcholo expected result 1,2,3, 
    data.forEach((element,index)=>{
      
      if(data[index].Alcohol === elementA){                      
        sum= data[index].Malic_Acid+sum
        count++                                              // its only push alcoholic =1 element into marr1
         }    
  
  
    })
    var avg=sum/count
    avgarr.push(avg);
    
    sum=0;                  
    count=0
    
  })

  console.log(avgarr)

  function b(){
    var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    data: arr,
    type: 'category',
    name: 'alchole',                  // axis name or lables 
    position: 'left',
    axisLabel: {
      inside: true,
      color: "white"
    },
    
    z: 10
},
  yAxis: {
    
    type: 'value',
    name: 'Avg of mallic acid ',
    min: 0,
    max: 20,
    position: 'left',
    // axisLabel: {
    //   formatter: '{value} °C'}
     
  },
  series: [
    {
      data: avgarr,
       
    // avg of malic acid 
      type: 'bar',
      color: "#888888",
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      }
    }
  ]
};

option && myChart.setOption(option);

  }
  useEffect(() => {
    b()
                    // its use for run the function before render 
    
  }, )
  return (
    <>
        <div id="main"></div> 
    </>
  )
}

export default Barchart