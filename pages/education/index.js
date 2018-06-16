import React from 'react'
import Layout from '../../components/Layout/index'

import { FlipCard } from 'react-flop-card';

import WithEduCard from './withEduCard'
import WithoutEduCard from './withoutEduCard'


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
            frontChild={ <WithEduCard /> }

            backChild={ <WithoutEduCard/>}
            width={ "100%" } height={ 100 }
           />

        </div>
			</Layout>
    )
  }
}

export default Education