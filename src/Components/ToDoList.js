import React, {Component} from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setTodos}) => {
	return(
		<div className="todo-container">
			<ul className  ="todo-list">
				{
					todos.map(todo => (
						<ToDo todo = {todo} text={todo.text} completed={todo.completed} key={todo.id} todos= {todos} setTodos={setTodos}/>
					))
				}
			</ul>
		</div>


	);
}
export default ToDoList;