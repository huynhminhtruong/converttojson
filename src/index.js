import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import Users from './Users';
import MyComponent from './MyComponent';
import StateAndLifecycle from './StateAndLifecycle';
import HandleEvents from './HandleEvents';
import './index.css';

ReactDOM.render(
	<App />,
  	document.getElementById('root')
);

ReactDOM.render(
	<Users />,
	document.getElementById('user')
);

// ReactDOM.render(
// 	<Form />,
// 	document.getElementById('form')
// );

// ReactDOM.render(
// 	<HandleEvents />,
// 	document.getElementById('event')
// );

// ReactDOM.render(
// 	<MyComponent />,
// 	document.getElementById('mycomponent')
// );

// ReactDOM.render(
// 	<StateAndLifecycle />,
// 	document.getElementById('stateandlifecycle')
// );
