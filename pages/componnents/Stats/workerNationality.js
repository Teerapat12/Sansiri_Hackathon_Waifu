import React from 'react'
import {Doughnut, Line, Bar} from 'react-chartjs-2';


const data = {
  labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'จำนวนแรงงานชาติไทย',
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
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'จำนวนแรงงานต่างด้าว',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(175,92,92,0.4)',
      borderColor: 'rgba(175,92,92,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(175,92,92,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(175,92,92,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30, 21, 17, 12, 13, 51, 12]
    }
  ]
};

const options = {
  scales: {
    xAxes: [{
      stacked: true
    }],
    yAxes: [{
      stacked: true,
      // display:false
    }]
  },
}



class WorkerNationality extends React.Component {
  render () {
    return (
        <Bar data={data} options={options}/>
    )
  }
}


export default WorkerNationality