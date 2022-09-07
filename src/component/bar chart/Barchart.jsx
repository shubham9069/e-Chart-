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



  var sum1=0;
  var count1=1; 
  var sum2=0;
  var count2=1  
  var sum3=0;
  var count3=1;        // its containe only alc1holic 3 malic acid data 
  
  data.forEach((element,index)=>{
   
    if(data[index].Alcohol === 1){                      
      sum1 = data[index].Malic_Acid+sum1;
      count1++                                              // its only push alcoholic =1 element into marr1
       }    

    else if(data[index].Alcohol === 2){
      sum2 = data[index].Malic_Acid+sum2;  
      count2++                                                       // its only push alcoholic =2 element into marr2
    }

    else if(data[index].Alcohol === 3){
      sum3 = data[index].Malic_Acid+sum3;  
      count3++                                                    // // its only push alcoholic =3 element into marr3
    }

  })
  

  function b(){
    var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    data: arrmalic.filter((element,index)=>{                  // its remove duplicase of a array 
      return arrmalic.indexOf(element) === index                  // in this methode i am bit confuse so i have to go throught this methode on internet 
      
    }),
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
      data: [sum1/count1,sum2/count2,sum3/count3],      // avg of malic acid 
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