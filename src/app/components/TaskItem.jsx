"use client"
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TaskUpdate } from './TaskUpdate';
import { useState } from 'react';

export const TaskItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	const [AddedToday, setAddToday] = useState(false);

	// Función para cambiar la clase al hacer clic
	const changeAddToDeleteToday = () => {
		setAddToday(!AddedToday);
	};
	return (
		<li className='ActionItem'>
			<button onClick={changeAddToDeleteToday} className={AddedToday ? 'DeleteToday' : 'AddToday'}  >
				<span className="material-icons">{AddedToday ? 'horizontal_rule' : 'add'}</span>
			</button>
			<TaskUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<span className="check-box" onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}


				>
					<span className="material-icons DoneIcon">done</span>
				</label>
			</span>
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};