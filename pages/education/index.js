import React from 'react'
import Layout from '../../components/Layout/index'

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
          <Carousel renderCenterLeftControls={false} renderCenterRightControls={false}>
            <EduFlipCard
              front={{"name":"เด็กที่เรียนพื้นที่ทั่วไป","studentNum":"152","img":"https://kbob.github.io/images/sample-5.jpg"}}
              back={{"name":"เด็กที่ไม่เรียนพื้นที่ทั่วไป","studentNum":"30","img":"http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=46"}}
            />
            <EduFlipCard
              front={{"name":"เด็กเรียนในพื้นที่ Good Space","studentNum":"65","img":"https://cdn.shopify.com/s/files/1/2035/3607/products/IMG-Worlds-of-Adventure-11-1-825x464_530x@2x.jpg?v=1520568786"}}
              back={{"name":"เด็กที่ไม่ได้เรียนใน Good Space","studentNum":"31","img":"http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"}}
            />
            <EduFlipCard
              front={{"name":"เด็กที่เรียนในประเทศไทย","studentNum":"36","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmEeW66gIMGR5WM_M8VK5VYQHTQVda2U55DEije4__4Oq-wjLXw"}}
              back={{"name":"เด็กที่เรียนมาจากนอกประเทศ","studentNum":"12","img":"https://kbob.github.io/images/sample-5.jpg"}}
            />
          </Carousel>

        </div>
			</Layout>
    )
  }
}

export default Education