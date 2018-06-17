import React from 'react'
import axios from 'axios';

class Worker extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      workers: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/workers')
      .then(res=> this.setState({workers:res.data}));
  }

  render() {
    return(
      <div style={{padding:'15px'}}>
        {this.state.workers.map((worker)=><div>{worker.fname}</div>)}
      </div>
    )
  }
}

export default Worker