import React from 'react'
import {Bar, Line} from 'react-chartjs-2';


const data = {
  labels: [2012,2013,2014,2015,2016,2017,2018],
  datasets: [
    {
      label: 'แรงงานสัญชาติไทย',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgb(239, 97, 35, 0.4)',
      borderColor: 'rgb(239, 97, 35, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(239, 97, 35, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(239, 97, 35, 1)',
      pointHoverBorderColor: 'rgb(239, 97, 35, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20,50,30,65,70,100]
    },
    {
      label: 'แรงงานสัญชาติพม่า',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10,35,650,70,150]
    }
  ]
};

class WorkerNationality extends React.Component {
  render () {
    return (
        <Bar data={data} />
    )
  }
}


export default WorkerNationality