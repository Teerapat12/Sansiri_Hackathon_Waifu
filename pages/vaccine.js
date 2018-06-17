import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'


import VaccineSummary from '../components/Stats/vaccineSummary';
import VaccineTimeLine from '../components/Stats/vaccineTimeline';

class Vaccine extends React.Component{
  render() {
    return(
			<Layout>
        <div style={{padding:'15px'}}>
          <VaccineSummary />
          <VaccineTimeLine />
        </div>
			</Layout>
    )
  }
}

export default Vaccine