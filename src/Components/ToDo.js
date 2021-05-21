import './ToDo.css';
import React from 'react';

const ToDo = ({todo, text, completed, todos, setTodos}) => {
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !==todo.id));
	}
	const completeHandler = () => {
		setTodos(todos.map((item) => {
			if(item.id === todo.id){ 
				return{
					...item, completed : !item.completed,
				}	
			}
			return item;	
		}));
	}
	
	const modifyHandler = () => {


	}

	return(
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}> {text} 
			<button className="complete-btn" onClick={completeHandler} >  achevé </button>
			<button className="trash-btn" onClick={deleteHandler}> - </button>
			<button className="modify-btn" onClick={modifyHandler} >  modifier </button>
			</li>
		</div>

		);
}

export default ToDo;