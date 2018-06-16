import React from 'react'
import Layout from '../../components/Layout/index'

import { FlipCard } from 'react-flop-card';

import WithEduCard from './withEduCard'
import WithoutEduCard from './withoutEduCard'
import EduFlipCard from './EduFlipCard'
import Carousel from 'nuka-carousel';

const eduHisData = [
  ,
  {"name":"เด็กที่เรียนพื้นที่ทั่วไป","studentNum":"152","img":"https://kbob.github.io/images/sample-5.jpg"},
]

class Education extends React.Component{

  constructor() {
    super()
    this.state = {
      flipped: false,
    }
  }

  render() {
    console.log(this.state.flipped)
    return(
			<Layout>
        <div style={{padding:'15px'}}>
          <h2 style={{marginLeft:'40px'}}>ประวัติการศึกษา</h2>
          <Carousel>
            <EduFlipCard
              front={{"name":"เด็กที่เรียนพื้นที่ทั่วไป","studentNum":"152","img":"https://kbob.github.io/images/sample-5.jpg"}}
              back={{"name":"เด็กที่ไม่เรียนพื้นที่ทั่วไป","studentNum":"30","img":"https://kbob.github.io/images/sample-5.jpg"}}
            />
            <EduFlipCard
              front={{"name":"เด็กเรียนในพื้นที่ Good Space","studentNum":"65","img":"https://kbob.github.io/images/sample-5.jpg"}}
              back={{"name":"เด็กที่ไม่ได้เรียนใน Good Space","studentNum":"31","img":"https://kbob.github.io/images/sample-5.jpg"}}
            />
            <EduFlipCard
              front={{"name":"เด็กที่เรียนในประเทศไทย","studentNum":"36","img":"https://kbob.github.io/images/sample-5.jpg"}}
              back={{"name":"เด็กที่เรียนมาจากนอกประเทศ","studentNum":"12","img":"https://kbob.github.io/images/sample-5.jpg"}}
            />
          </Carousel>

        </div>
			</Layout>
    )
  }
}

export default Education