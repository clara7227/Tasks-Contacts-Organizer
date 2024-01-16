"use client"
import React from 'react';
import { useForm } from '../hooks/UseForm';

//añadir tarea
export const ContactAdd = ({ handleNewContact }) => {
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
		console.log(description)
		//objeto de nueva tarea
		let newContact = {
			id: new Date().getTime(), //esta funcion se utiliza para que el
			//id de esta tarea sea UNICO
			description: description, //descripcion de tarea
			done: false,
		};

		handleNewContact(newContact);
		onResetForm();
	};

	return (
		// cuando se envia formulario se dispara función de onFormSubmit
		<form className="ItemAddForm FormContact" onSubmit={onFormSubmit}>
			<label htmlFor="">Name of Contact</label>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Contact name'
			/>
			<label htmlFor="">E-mail</label>
			<input
				type='text'
				className='input-add'
				name='hora'
				value={`${description}@gmail.com `}
				placeholder='lucrecia@gmail.com'
			/>
			<label htmlFor="">Phone number</label>
			<input
				type='text'
				className='input-add'
				name='hora'
				value="637 77 82 83"
				placeholder='Phone number here'
			/><label htmlFor=""> Context </label>
			<input
				type='text'
				className='input-add'
				name='context'
				value="Best product designer in town"
				placeholder='Why do I know this person?'
			/>
			<button className='BtnAddItem' type='submit'>
				Agregar
			</button>
		</form>
	);
};

