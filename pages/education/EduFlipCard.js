import React from 'react'
import { FlipCard } from 'react-flop-card';

class EduFlipCard extends React.Component{

  constructor() {
    super()
    this.state = {
      flipped: false,
    }
  }


  render() {
    const {front,back} = this.props;
    return(

      <div style={{height:"475px"}}>
        <FlipCard
          flipped={ this.state.flipped }
          frontChild={ cardDiv(front.name,front.studentNum,front.img, ()=>{this.setState({flipped:!this.state.flipped})}) }
          backChild={  cardDiv(back.name,back.studentNum,back.img, ()=>{this.setState({flipped:!this.state.flipped})})}
          width={ "100%" } height={ 100 }
        />
      </div>
    )
  }
}


const cardDiv = (name,studentNum,img, onFlip) => <div>
  <div style={cardStyle}>
    <p style={cardTitleStyle}>{name}</p>
    <div style={{position:"relative"}}>
      <div style={{...imageStyle,display:"flex", alignItems:"center",justifyContent:"center", backgroundImage:"url('"+img+"')"}}><p style={middleNumberStyle}>{studentNum} คน</p></div>

      <button style={rotateBtnStyle} onClick={()=>onFlip()}>O</button>
    </div>
  </div>
</div>


const cardStyle = {
  borderColor: 'gray',
  borderRadius: '20px',
  borderWidth: '1px',
  borderStyle:' solid',
  shadowBlur:10,
  height:"400px",
  marginLeft:"30px",
  marginRight:"30px",
};

const rotateBtnStyle = {
  display: "block",
  marginTop:"50px",
  marginLeft: "auto",
  marginRight: "auto",

  position:"relative",
  left:"112px"

}

const middleNumberStyle = {
  display:"flex",
  height:"40px",
  backgroundColor:"black",
  color:"white",
  fontSize:"2em"

}

const cardTitleStyle = {
  margin:"20px",
  textAlign:"center",
  fontSize:"1.5em"
}

const imageStyle = {
  display: "block",
  marginTop:"50px",
  marginLeft: "auto",
  marginRight: "auto",
  height:"150px",
  width:"225px",
}

export default EduFlipCard