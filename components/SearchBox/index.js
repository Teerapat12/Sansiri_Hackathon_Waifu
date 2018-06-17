import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

function renderInput (inputProps) {
	const { classes, ref, ...other } = inputProps;

	return (
		<TextField
			fullWidth
			InputProps={{
				inputRef: ref,
				classes: {
					input: classes.input
				},
				...other
			}}
		/>
	);
}

function renderSuggestion (suggestion, { query, isHighlighted }) {
	const matches = match(suggestion.label, query);
	const parts = parse(suggestion.label, matches);

	return (
		<MenuItem selected={isHighlighted} component="div">
			<div>
				{parts.map((part, index) => {
					return part.highlight ? (
						<span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
					) : (
						<strong key={String(index)} style={{ fontWeight: 500 }}>
							{part.text}
						</strong>
					);
				})}
			</div>
		</MenuItem>
	);
}

function renderSuggestionsContainer (options) {
	const { containerProps, children } = options;

	return (
		<Paper {...containerProps} square>
			{children}
		</Paper>
	);
}

const styles = theme => ({
	container: {
		flexGrow: 1,
		position: 'relative',
		height: 250
	},
	suggestionsContainerOpen: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0
	},
	suggestion: {
		display: 'block'
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none'
	}
});

class SearchBox extends React.Component {
	state = {
		value: '',
		suggestions: []
	};

	getSuggestionValue (suggestion) {
		return suggestion.label;
	}

	getSuggestions (value) {
		let {datas} = this.props
		datas = datas.reduce((obj, cur) => {
			obj.push({label: cur.fname, ...cur})
			return obj
		}, [])
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		let count = 0;

		return inputLength === 0
			? []
			: datas.filter(suggestion => {
				const keep =
					count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

				if (keep) {
					count += 1;
				}

				return keep;
			});
	}

	handleSuggestionsFetchRequested = onFound => ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		}, onFound(this.getSuggestions(value))); // call onFound callback
	};

	handleChange = (event, { newValue }) => {
		this.setState({
			value: newValue,
			suggestions: this.getSuggestions(newValue)
		});
	};

	componentDidMount() {
		this.setState({suggestions: this.props.datas.reduce((obj, cur) => {
				obj.push({label: cur.name})
				return obj
			}, [])})
	}
	handleSuggestionsClearRequested = (onNotFound) => () => {
		this.setState({
			suggestions: []
		}, () => onNotFound([]))
	}


	render () {
		const { classes, onFound, onNotFound } = this.props;

		return (
			<Autosuggest
				theme={{
					container: classes.container,
					suggestionsContainerOpen: classes.suggestionsContainerOpen,
					suggestionsList: classes.suggestionsList,
					suggestion: classes.suggestion
				}}
				renderInputComponent={renderInput}
				suggestions={this.state.suggestions}
				onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested(onFound)}
				onSuggestionsClearRequested={this.handleSuggestionsClearRequested(onNotFound)}
				renderSuggestionsContainer={renderSuggestionsContainer}
				getSuggestionValue={this.getSuggestions}
				renderSuggestion={renderSuggestion}
				inputProps={{
					classes,
					placeholder: 'Search a country (start with a)',
					value: this.state.value,
					onChange: this.handleChange
				}}
			/>
		);
	}
}

SearchBox.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBox);