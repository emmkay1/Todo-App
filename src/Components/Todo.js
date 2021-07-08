import React, { Component } from 'react';
import '../Styles/Todo.css';

class Todo extends Component {
	state = { todo: this.props.todo, toggle: false, complete: false };

	handleEdit = () => {
		this.setState({ toggle: true });
	};

	handleDelete = () => {
		this.props.deleteTodo(this.props.id);
	};

	handleCompletion = () => {
		this.setState((st) => ({
			complete: !st.complete
		}));
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		this.props.editTodo(this.props.id, this.state.todo);
		this.setState({ toggle: false });
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	displayForm() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="update-form-container">
					<input type="text" name="todo" value={this.state.todo} onChange={this.handleChange} />
					<input type="submit" value="SAVE" />
				</div>
			</form>
		);
	}

	render() {
		return (
			<div className="todo-container">
				<div className="Todo">
					{this.state.toggle ? (
						this.displayForm()
					) : (
						<div>
							<span
								className={this.state.complete ? 'todo-text' : ''}
								id="span-todo-text"
								onClick={this.handleCompletion}
							>
								{this.props.todo}
							</span>
							<span className="delete" onClick={this.handleDelete}>
								<i className="fas fa-trash" />
							</span>
							<span className="edit" onClick={this.handleEdit}>
								<i className="fas fa-pen" />
							</span>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Todo;
