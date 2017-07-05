import React from 'react';

class Event extends React.Component {
	constructor() {
		super()

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault();
		console.log('Button click');
	}

	render() {
		return (
			<a href="#" onClick={this.handleClick}>
				Click me
			</a>
		);
	}
}

export default Event;