import React from 'react'

class Content extends React.Component {
	constructor() {
		super()

		this.state = {
			data: [], 
			data1: ''
		}

		this.setStateHandler = this.setStateHandler.bind(this)

		this.updateState = this.updateState.bind(this)
	}

	setStateHandler() {
		var array = this.state.data
		var length = array.length
		var item = (length > 0) ? (array[length - 1] + 1) : 0

		array.push(item)

		this.setState({ data: array })
	}

	updateState(e) {
		this.setState({ data: e.target.value })
	}

	render() {
		return (
			<div>
				<h4>{this.props.titleProp}</h4>
				<TextBox typeProp="text" updateStateProp={this.updateState} stateProp={this.state.data1} />
				<label>{this.state.data}</label>
			</div>
		)
	}
}

class TextBox extends React.Component {
	render() {
		return (
			<div>
				<input type={this.props.typeProp} onChange={this.props.updateStateProp} />
				<label>{this.props.stateProp}</label>
			</div>
		)
	}
}

export default Content