import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';
import TodoHeader from './todo-header.jsx';
import TodoList from './todo-list.jsx';
import TodoForm from './todo-form.jsx';

/*
Todo app structure

TodoApp
	- TodoHeader
	- TodoList
    - TodoListItem #1
		- TodoListItem #2
		  ...
		- TodoListItem #N
	- TodoForm
*/


export default class TodoApp extends Component {
	constructor (props) {
		super(props);
		this.state = {todoItems: props.todoItems};
	}
	addItem = (todoItem) => {
		const todoItems = this.state.todoItems.concat();

		todoItems.unshift({
			index: todoItems.length+1,
			value: todoItem.newItemValue,
			done: false
		});

		this.setState({todoItems: todoItems});
	}
	removeItem = (itemIndex) => {
	    const todoItems = this.state.todoItems.concat();

		todoItems.splice(itemIndex, 1);
		this.setState({todoItems: todoItems});
	}
	markTodoDone = (itemIndex) => {
	    const todoItems = this.state.todoItems.concat();
		const todo = todoItems[itemIndex];
		todoItems.splice(itemIndex, 1);
		todo.done = !todo.done;
		todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
		this.setState({todoItems: todoItems});
	}
	render() {
	    console.log('render', this.props.todoItems)
		return (
			<div id="main">
				<TodoHeader />
				<TodoList
					items={this.state.todoItems}
					removeItem={this.removeItem}
					markTodoDone={this.markTodoDone}/>

				<TodoForm
					addItem={this.addItem} />
			</div>
		);
	}
}
