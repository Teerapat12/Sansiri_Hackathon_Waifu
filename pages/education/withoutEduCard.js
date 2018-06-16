import React from 'react'

class WithoutEduCard extends React.Component{

  render() {
    return(
      <div style={cardStyle}>
        Back
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
  height:"400px",
  backgroundColor:"white"
};


export default WithoutEduCard