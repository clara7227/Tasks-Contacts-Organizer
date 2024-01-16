
"use client"
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/UseForm';
import { FaTrash } from 'react-icons/fa';
import { BsArrowsAngleExpand } from "react-icons/bs";

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


		// Función para cambiar la clase al hacer clic

	};
	const [DetailView, setDetailView] = useState(false);

	const changeView = () => {
		setDetailView(!DetailView);
	};

	return (
		// cuando se envia formulario se dispara función de onSubmitUpdate
		<form onSubmit={onSubmitUpdate}>
			<div>
				<input
					type='text'
					className="InputItemTitle"
					name='updateDescription'
					value={updateDescription}
					onChange={onInputChange}
					placeholder='¿Qué hay que hacer?'
					readOnly={disabled}
					ref={focusInputRef}
				/>
				<input
					type='text'
					className="InputItemDetail"
					name='updateDescription'
					value={`${updateDescription}@gmail.com `}
					onChange={onInputChange}
					placeholder='¿Qué hay que hacer?'
					readOnly={disabled}
					ref={focusInputRef}
				/>
				<input
					type='text'
					className={`InputItemDetail ${DetailView ? "itemDisplay" : 'itemNoDisplay'
						}`}
					name='updateDescription'
					value= "637 77 82 83"
					onChange={onInputChange}
					placeholder='¿Qué hay que hacer?'
					readOnly={disabled}
					ref={focusInputRef}
				/>
				<input
					type='text'
					className={`InputItemDetailSpecial ${DetailView ? "itemDisplay" : 'itemNoDisplay'
						}`}
					name='updateDescription'
					value="She works at a fine company"
					onChange={onInputChange}
					placeholder='¿Qué hay que hacer?'
					readOnly={disabled}
					ref={focusInputRef}
				/>
			</div>
			<button
				className='btn-expand'
				onClick={changeView}
			>
<BsArrowsAngleExpand />
				{/*<span className="material-icons-sharp">expand</span>*/}

			</button>
			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};