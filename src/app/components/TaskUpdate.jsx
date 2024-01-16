
"use client"
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/UseForm';

//FUNCION PARA MODIFICAR UNA TAREA
export const TaskUpdate = ({ todo, handleUpdateTodo }) => {
    // Sólo hace falta cambiar el input para editar, no hay que dar a ningun botón
	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description,
	});

	// el formulario para meter datos de tarea queda deshabilitado
// mientras no se haya activado la opcion de editar

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

		handleUpdateTodo(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
            // cuando se envia formulario se dispara función de onSubmitUpdate
		<form onSubmit={onSubmitUpdate}>
			<div>
			<input
				type='text'
				className={`InputItemTitle ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
				readOnly={disabled}
				ref={focusInputRef}
			/>
			<input
				type='text'
				className={`InputItemDetail ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value= "1h."
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
				readOnly={disabled}
				ref={focusInputRef}
			/>
</div>
			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
			
		</form>
	);
};