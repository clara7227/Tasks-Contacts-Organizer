"use client"
import { useState } from 'react';
//Esta función gestiona el estado del formulario

//initialForm: objeto para inicializar formulario
export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = e => { // e = evento que desencadena el cambio en el formulario
		const name = e.target.name; //"e" es el evento conceptual, target es el elemento específico en el que ocurre el evento (aqui, un input)
		const value = e.target.value;

        //funcion para actualizar el estado
		setFormState({
        //los puntos supensivos delante de formState significan que el nuevo estado que
        // se forma con setFormState es igual al estado original Formstate, solo que 
        //cambia el valor del nombre
			...formState,
			[name]: value,
		});
	};
//formulario se limpia, vuelve a forma inicial una vez que se ha enviado el contenido
	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};

