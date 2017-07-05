import React from 'react';

const TableRow = ({id, name, age}) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{age}</td>
		</tr>
	)
}

const Button = ({typeProp, methodProp, nameProp}) => {
	return (
		<button type={typeProp} onClick={methodProp}>{nameProp}</button>
	)
}

const Header = ({headerProp}) => {
	var style = {
		fontStyle: 'italic', 
		color: 'blue'
	}

	return (
		<h4 style={style}>{headerProp}</h4>
	)
}

const AddNewForm = ({textBoxId, buttonType, methodProp}) => {
	let input;

	return (
		<div>
			<form>
				<input id={textBoxId} type="text" ref={(node) => { input = node }} placeholder="Name of animal" />
				<button type={buttonType} onClick={() => {
					methodProp(input.value);
					input.value='';
				}}>Add New Animal</button>
			</form>
		</div>
	)
}

const Item = ({name, id, remove}) => {
	return (
		<li>
			<label>{name}</label>
			<button type='button' value={id} onClick={remove}>Remove</button>
		</li>
	)
}

const ItemList = ({list, remove}) => {
	return (
		<ul>
			{list.map((item) => {
				return (<Item name={item.name} key={item.id} remove={remove} id={item.id} />)
			})}
		</ul>
	)
}

class AddTaskForm extends React.Component {
	constructor() {
		super();

		this.state = {
			data: []
		}

		this.addNewTask = this.addNewTask.bind(this);

		this.removeTask = this.removeTask.bind(this);
	}

	addNewTask() {
  		var list = this.state.data, task = this.refInput, length = list.length;

  		console.log(this.refs);

  		list.push({ name: task.value, id: (length > 0) ? (list[length - 1].id + 1) : 0 });

  		this.setState({ data: list });
  	}

  	removeTask(e) {
  		var remainder = this.state.data.filter((node) => {
  			if (node.id !== parseInt(e.target.value, 10)) return node;

  			return false;
  		});

  		this.setState({ data: remainder });
  	}

	render() {
		return (
			<div>
				<div>
					<ItemList list={this.state.data} remove={this.removeTask} />
				</div>
				<form>
					<input placeholder="Enter new task" ref={ input => { this.refInput = input }} />
					<input ref="textInput" />
					<Button typeProp="button" methodProp={this.addNewTask} nameProp="Add New Task" />
				</form>
			</div>
		)
	}
}

class Form extends React.Component {
	constructor() {
	    super();

	    this.state = {
	      data: [
	        {
	          "id":1,
	          "name":"Foo",
	          "age":"20"
	        },
	        {
	          "id":2,
	          "name":"Bar",
	          "age":"30"
	        },
	        {
	          "id":3,
	          "name":"Baz",
	          "age":"40"
	        }
	      ], 
	      text: [], 
	      animal: [], 
	      tasks: []
	    }

	    this.setNewState = this.setNewState.bind(this);

	    this.addNewAnimal = this.addNewAnimal.bind(this);
  	}

  	setNewState() {
  		var text = this.state.text, length = text.length;

  		text.push((length > 0) ? text[length - 1] + 1 : 0);

  		this.setState({ text: text });
  	}

  	addNewAnimal(animal) {
  		var list = this.state.animal;

  		list.push(animal);

  		this.setState({ animal: list });
  	}

	render() {
		return (
			<div>
				<Header headerProp="Add new user" />
				<table>
					<tbody>
						{this.state.data.map((person, i) => <TableRow key={i} id={person.id} name={person.name} age={person.age} />)}
					</tbody>
				</table>
				<AddTaskForm addNewTask={this.addNewTask} />
				<label>{this.state.tasks}</label>
				<AddNewForm textBoxId="addNewAnimal" buttonType="button" methodProp={this.addNewAnimal} />
				<label>{this.state.animal}</label>
			</div>
		)
	}
}

export default Form