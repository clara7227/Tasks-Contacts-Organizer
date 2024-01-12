"use client"
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TaskUpdate } from './TaskUpdate';

export const TaskItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span className="check-box" onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TaskUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteSearch()}
			>
				<FaTrash />
			</button>
		</li>
	);
};