import React from 'react'
import {Bar} from 'react-chartjs-2';


const data = {
  labels: ['0-1m','2m','4m','6m','9m','1y','1y6m','2y','2y6m'],
  datasets: [
    {
      label: 'เด็กที่ได้รับวัคซีน',
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
      data: [30,50,40,25,36,31,26,42,15,46,43,46]
    },
    {
      label: 'เด็กที่ไม่ได้รับวัคซีน',
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
      data: [10,5,20,31,12,13,31,20,6,3,14,30]
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

class VaccineTimeline extends React.Component {
  render () {
    return (
        <Bar data={data} options={options}
        />
    )
  }
}


export default VaccineTimeline