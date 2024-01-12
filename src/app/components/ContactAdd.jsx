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
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Nombre del contacto'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};

