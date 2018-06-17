import React from 'react'
import Carousel from 'nuka-carousel';

class WithEduCard extends React.Component{

  render() {

    return(

      <div style={cardStyle}>
        <Carousel>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        </Carousel>
      </div>
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