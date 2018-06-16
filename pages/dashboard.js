import React from 'react'
import Router from 'next/router'
import {Bar, Line} from 'react-chartjs-2';





class Dashboard extends React.Component{
  render() {
    return(
			<div>
        <a onClick={() => Router.push('/')}>Go to home</a>
			</div>
    )
  }
}

export default Dashboard