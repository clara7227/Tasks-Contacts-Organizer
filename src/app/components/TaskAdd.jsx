"use client"
import React from 'react';
import { useForm } from '../hooks/UseForm';

//añadir tarea
export const TaskAdd = ({ handleNewTodo }) => {
	//formulario
	const { description, onInputChange, onResetForm } = useForm({ //iniciar el formulario
		description: '',
	});
	//funcion comienza cuando se envia el formulario
	const onFormSubmit = e => {
		//importante: se previene la carga de la página
		e.preventDefault();
		//si la descripcion es de un solo caracter o menos, no se envia el formulario 
		if (description.length <= 1) return;

		//objeto de nueva tarea
		let newTodo = {
			id: new Date().getTime(), //esta funcion se utiliza para que el
			//id de esta tarea sea UNICO
			description: description, //descripcion de tarea
			done: false, // complecion de tarea
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		// cuando se envia formulario se dispara función de onFormSubmit
		<form className="ItemAddForm" onSubmit={onFormSubmit}>
			<label htmlFor="">Name of Task</label>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='To do...'
			/>
			<div className='InputButtonGroup'>
				<div>
					<label htmlFor="">Duration</label>
					<input
						type='dropdown'
						className='input-add'
						name='hora'
						value="1 h."
						placeholder='1 h.'
					/>
				</div>
				<button className='btn-add-today' type='submit'>
					<span className="material-icons">add</span>
					<p>Add to today's list</p>
				</button>

			</div>
			<button className='BtnAddItem' type='submit'>
				Add new task
			</button>
		</form>
	);
};

