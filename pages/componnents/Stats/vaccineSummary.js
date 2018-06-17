import React from 'react'
import {Bar, Line} from 'react-chartjs-2';


const data = {
  labels: ['ม.ค.', 'ก.ม.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.','ส.ค.','ก.ย.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
  datasets: [
    {
      label: 'อัตราการฉีดวัคซีน',
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
      data: [0.2,0.34,0.38,0.32,0.45,0.6,0.40,0.45,0.52,0.3,0.4,0.3,0.2,0.25,0.17]
    }
  ]
};


const options = {
  scales: {
    yAxes: [{
      // display:false
    }]
  },
}

class VaccineSummary extends React.Component {
  render () {
    return (
        <Line data={data} options={options}/>
    )
  }
}


export default VaccineSummary