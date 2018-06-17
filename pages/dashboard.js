import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'


import VaccineSummary from '../components/Stats/vaccineSummary';
import VaccineTimeLine from '../components/Stats/vaccineTimeline';

import WorkerNationality from '../components/Stats/workerNationality';
import FollowerPerYear from '../components/Stats/followerPerYear';

class Vaccine extends React.Component{
  render() {
    return(
      <Layout>
        <div style={{padding:'30px'}}>
          <div style={{marginTop:"30px"}}>
            อัตราส่วนชนชาติของแรงงาน
            <WorkerNationality />
          </div>

          <div style={{marginTop:"30px"}}>
            บุตรที่ติดตามมาต่อปี
            <FollowerPerYear />
          </div>

          <div style={{marginTop:"30px"}}>
            ข้อมูลการฉีดวัคซีน
            <VaccineSummary />
            <VaccineTimeLine />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Vaccine