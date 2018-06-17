import SearchBox from '../components/SearchBox'
import React from 'react'
import axios from 'axios'

class Howtouse_searchbox extends React.Component {
	state = {
		founds: [],
		datas: []
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/workers').then(result => this.setState({datas: result.data}))
	}
	render () {
		return (
			<>
				<SearchBox datas={this.state.datas}
						   onFound={(value) => this.setState({ founds: value })}
						   onNotFound={(value) => this.setState({ founds: value})}
						   placeholder="ค้นหาแรงงาน"
				/>
			</>
		)
	}
}

export default Howtouse_searchbox