import React from 'react'
import Layout from '../components/Layout'

import { FlipCard } from 'react-flop-card';

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
          <button onClick={e => this.setState({ flipped: !this.state.flipped })}>
            Flip
          </button>
          <FlipCard
            flipped={ this.state.flipped }
            frontChild={ <div>
              <div>Front</div>
              <div><small>(horizontal flip)</small></div>
            </div> }

            backChild={ <div>
              <div>Back</div>
              <div><small>(horizontal flip)</small></div>
            </div>}
            width={ 100 } height={ 100 }
           />
        </div>
			</Layout>
    )
  }
}

export default Education