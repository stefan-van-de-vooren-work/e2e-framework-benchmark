import React, { Component } from 'react';
import TodoListItem from './todo-list-item.jsx'

export default class TodoList extends React.Component {
	render () {
		return (
			<ul className="list-group"> {
				this.props.items.map((item, index) =>
					(
						<TodoListItem
							key={index}
							item={item}
							index={index}
							removeItem={this.props.removeItem}
							markTodoDone={this.props.markTodoDone} />
					))
			} </ul>
		);
	}
}
