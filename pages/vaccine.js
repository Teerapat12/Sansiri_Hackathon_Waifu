import React from 'react'
import Router from 'next/router'


import VaccineSummary from '../components/Stats/vaccineSummary';
import VaccineTimeLine from '../components/Stats/vaccineTimeline';

class Vaccine extends React.Component{
  render() {
    return(
			<div>
        <VaccineSummary />
        <VaccineTimeLine />
			</div>
    )
  }
}

export default Vaccine