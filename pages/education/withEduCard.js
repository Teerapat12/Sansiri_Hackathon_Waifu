import React from 'react'
import Slider from "react-slick";
import Slider from "slick/slick-theme.css";

class WithEduCard extends React.Component{

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <Slider {...settings}>
        <div style={cardStyle}>
          Front
        </div>
        <div style={cardStyle}>
          Front2
        </div>
      </Slider>
    )
  }
}


const cardStyle = {
  borderColor: 'gray',
  borderRadius: '5px',
  borderWidth: '1px',
  borderStyle:' solid',
  shadowBlur:10,
  height:"400px"
};


export default WithEduCard