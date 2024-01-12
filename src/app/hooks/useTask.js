"use client"
import { useEffect, useReducer } from 'react';
import { TaskReducer } from '../Reducer';

export const useTask = () => {
    //Etado inicial de las tareas, obtenido desde el almacenamiento local (localStorage)
	const initialState = [];

  
     // Función para obtener las tareas del localStorage al iniciar
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

	const [todos, dispatch] = useReducer(
		TaskReducer, // Reductor que define cómo las acciones afectan al estado de las tareas - las acciones son, add, modify, delete.
		initialState, // Estado inicial de las tareas
		init // ??
	);

        //CONTADOR DE TAREAS
    const todosCount = todos.length
    const pendingTodosCount = todos.filter(todo => !todo.done).length

        
    useEffect(() => {
        //Funcion para almacenar datos en localStorage
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


	const handleNewTodo = todo => {
		const action = {
            // nombre de la tarea que luego captura el
			type: 'Add Todo',
            // payload se refiere a los datos específicos o información que se transporta
			payload: todo,
		};

		dispatch(action);
        console.log(todos)
	};

	const handleDeleteTodo = id => {
		const action = {
			type: 'Delete Todo',
			payload: id,
		};
        console.log(action.payload)
		dispatch(action);
	};

	const handleCompleteTodo = id => {
		const action = {
			type: 'Complete Todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateTodo = (id, description) => {
		const action = {
			type: 'Update Todo',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};


    return{
        
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
       
        
    }
    console.log(todos)
};