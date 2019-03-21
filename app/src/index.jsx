import React  from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo-app.jsx';

const todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

ReactDOM.render(
	<TodoApp todoItems={todoItems}/>,
	document.getElementById('root')
);