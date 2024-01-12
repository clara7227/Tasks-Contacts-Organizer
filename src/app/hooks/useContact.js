"use client"
import { useEffect, useReducer } from 'react';
import { TaskReducer } from '../Reducer';

export const useContact = () => {
    //Estado inicial de las tareas, obtenido desde el almacenamiento local (localStorage)
	const initialState = [];

  
     // Función para obtener las tareas del localStorage al iniciar
    const init = () => {
        return JSON.parse(localStorage.getItem('contacts')) || []
    }
	//declaracion de contacts
	const [contacts, dispatch] = useReducer(
		TaskReducer, // Reductor que define cómo las acciones afectan al estado de las tareas - las acciones son, add, modify, delete.
		initialState, // Estado inicial de las tareas
		init // ??
	);

        
    useEffect(() => {
        //Funcion para almacenar datos en localStorage
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])


    //CONTACTOS
    const handleNewContact = contact => {
		const action = {
            // nombre de la tarea que luego captura el taskreducer
			type: 'Add Contact',
            // payload se refiere a los datos específicos o información que se transporta
			payload: contact,
		};

		dispatch(action);
        console.log(contact);
        console.log(contact.id)
	};
	const handleDeleteContact = id => {
		const action = {
			type: 'Delete Contact',
			payload: id,
		};
        console.log(action.payload)
		dispatch(action);
	};
    const handleUpdateContact = (id, description) => {
        const action = {
			type: 'Update Contact',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
        console.log(description)
    
	};

 //   BÚSQUEDA
    const handleSearchContact = (description) => {
        const action = {
			type: 'Search Contact',
			payload: {
				description,
			},
		};

		dispatch(action);
       // console.log(contacts)
    }
    return{
        
        contacts,
        handleNewContact,
        handleUpdateContact,
        handleDeleteContact,
        handleSearchContact
    }
    console.log(contacts)
};