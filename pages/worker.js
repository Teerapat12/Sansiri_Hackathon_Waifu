import React from 'react'
import axios from 'axios';

import { ListGroup, Panel, ListGroupItem } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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

        <Panel>
          <Panel.Heading>Panel heading</Panel.Heading>
          <Panel.Body>Some default panel content here.</Panel.Body>
          <ListGroup>
            {this.state.workers.map((worker)=><ListGroupItem>{worker.fname}</ListGroupItem>)}
          </ListGroup>
        </Panel>;

      </div>
    )
  }
}

export default Worker