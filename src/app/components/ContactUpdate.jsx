
"use client"
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/UseForm';


//FUNCION PARA MODIFICAR UNA TAREA
export const ContactUpdate = ({ contact, handleUpdateContact }) => {
    // Sólo hace falta cambiar el input para editar, no hay que dar a ningun botón
	
	const { updateDescription, onInputChange } = useForm({
		updateDescription: contact.description,
	});
// el formulario para meter datos de contacto queda deshabilitado
// mientras no se haya activado la opcion de editar
	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = contact.id;
		const description = updateDescription;

		handleUpdateContact(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
            // cuando se envia formulario se dispara función de onSubmitUpdate
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					contact.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};