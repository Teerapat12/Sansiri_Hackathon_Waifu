import React from 'react'
import Layout from '../../components/Layout/index'

import { FlipCard } from 'react-flop-card';

import WithEduCard from './withEduCard'
import WithoutEduCard from './withoutEduCard'
import EduFlipCard from './EduFlipCard'
import Carousel from 'nuka-carousel';

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
            <EduFlipCard />
            <EduFlipCard />
            <EduFlipCard />
          </Carousel>

        </div>
			</Layout>
    )
  }
}

export default Education