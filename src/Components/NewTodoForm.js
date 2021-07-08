import React, { Component } from 'react';
import '../Styles/NewTodoForm.css';

class NewTodoForm extends Component {
	state = { todo: '' };

	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.addTodo(this.state);
		this.setState({ todo: '' });
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="todo-form">
				<label htmlFor="todo">New Todo</label>
				<br />
				<div id="input-container">
					<input
						type="text"
						id="todo"
						name="todo"
						value={this.state.todo}
						onChange={this.handleChange}
						required
					/>
					<input type="submit" value="ADD TODO" />
				</div>
			</form>
		);
	}
}

export default NewTodoForm;
