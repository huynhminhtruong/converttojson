import React from 'react';

class MyComponent extends React.Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<MyComponent name="Michael" />
				<MyComponent name="Ryan" />
				<MyComponent name="React" />
			</div>
		)
	}
}

export default App