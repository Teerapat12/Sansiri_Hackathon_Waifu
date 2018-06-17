import React from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'


import VaccineSummary from '../components/Stats/vaccineSummary';
import VaccineTimeLine from '../components/Stats/vaccineTimeline';

import WorkerNationality from '../components/Stats/workerNationality';
import FollowerPerYear from '../components/Stats/followerPerYear';


import EducationTimeline from '../components/Stats/educationTimeline';

class Vaccine extends React.Component{
  render() {
    return(
      <Layout>
        <div style={{padding:'30px', maxWidth: 1000, margin: 'auto'}}>
          <div style={{marginTop:"50px",marginBottom:"70px"}}>
            อัตราส่วนชนชาติของแรงงาน
            <WorkerNationality />
          </div>

          <div style={{marginTop:"50px",marginBottom:"70px"}}>
            บุตรที่ติดตามมาต่อปี
            <FollowerPerYear />
          </div>

          <div style={{marginTop:"50px",marginBottom:"70px"}}>
            ข้อมูลการฉีดวัคซีน
            <VaccineSummary />
            <VaccineTimeLine />
          </div>

          <div>
            การศึกษา
            <EducationTimeline />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Vaccine