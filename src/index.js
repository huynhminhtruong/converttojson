import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import MyComponent from './MyComponent';
import './index.css';

ReactDOM.render(
	<App />,
  	document.getElementById('root')
);

ReactDOM.render(
	<Form />,
	document.getElementById('f1')
);

ReactDOM.render(
	<MyComponent name="reactjs developer" />,
	document.getElementById('state')
);
