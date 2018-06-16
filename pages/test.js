import SearchBox from '../components/SearchBox'
import React from 'react'
import axios from 'axios'

const suggestion = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' }
].map(suggestion => ({
	value: suggestion.label,
	label: suggestion.label
}));

class Test extends React.Component {
	state = {
		founds: [],
		datas: []
	}

	componentDidMount() {
		axios.get('http://localhost:3000/api/followers').then(result => this.setState({datas: result}))
	}
	render () {
		return (
			<>
				<p style={{backgroundColor: 'red'}}>{this.state.founds.map(found => found.label).join(', ')}</p>
				<SearchBox datas={this.state.datas}
						   onFound={(value) => this.setState({ founds: value })}
						   onNotFound={(value) => this.setState({ founds: value})}
				/>
			</>
		)
	}
}

export default Test