import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'


import VaccineSummary from '../components/Stats/vaccineSummary';
import VaccineTimeLine from '../components/Stats/vaccineTimeline';

class Vaccine extends React.Component{
  render() {
    return(
        <div style={{padding:'15px',marginBottom:'70px'}}>
          <VaccineSummary />
          <VaccineTimeLine />
        </div>
    )
  }
}

export default Vaccine