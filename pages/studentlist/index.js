import React from 'react'
import axios from 'axios';



class StudentList extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      students:[]
    }
  }

  componentDidMount(){
    console.log(this.props.location.query);
    axios.get('http://localhost:3000/api/followers')
      .then(data=>{
        console.log(data)
        this.setState({students:data.data})
      })
  }

  render() {
    const {students} = this.state;
    return(
      <div >
        <div style={{width:"100%",height:"125px",backgroundColor:"black"}}>
          <div style={{align:"center",width:"50%",height:"50px",backgroundColor:"red",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
            height:"125px",
            position:"relative",
            top:"75px",
            textAlign:"center",
            fontSize:"2em",
            paddingTop:"35px",
          }}>{students.length} คน</div>
        </div>
        <div style={{marginTop:"90px"}}>

          {students?students.map((student,index)=>
            <div key={index} style={{display:"block"}}>
              {student.fname+"  "+student.school.level}
            </div>

          ):<div></div>}
        </div>

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


export default StudentList