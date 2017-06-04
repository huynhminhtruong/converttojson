import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import MyComponent from './MyComponent';
import StateAndLifecycle from './StateAndLifecycle';
import './index.css';

ReactDOM.render(
	<App />,
  	document.getElementById('root')
);

ReactDOM.render(
	<Form />,
	document.getElementById('form')
);

ReactDOM.render(
	<MyComponent />,
	document.getElementById('mycomponent')
);

ReactDOM.render(
	<StateAndLifecycle />,
	document.getElementById('stateandlifecycle')
);
