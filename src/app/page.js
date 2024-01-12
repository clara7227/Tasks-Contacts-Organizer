"use client";
import { useState } from 'react';
// import './App.css';
import { TaskAdd } from './components/TaskAdd';
import { TaskList } from './components/TaskList';
import { useTask } from './hooks/useTask';
import { ContactAdd } from './components/ContactAdd';
import { useContact } from './hooks/useContact';
import { ContactList } from './components/ContactList';
import { ContactSearch } from './components/ContactSearch';

function App() {
	const {
		//definicion de variables
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTask();

  const {
	//definicion de variables
    contacts,
//	contactsearch,
    handleNewContact,
	handleUpdateContact,
	handleDeleteContact,
	handleSearchContact
  } = useContact();
//   let elementoABuscar = 30;
//   // Array de ejemplo
// let array = [10, 20, 30, 30, 40, 50];

// Usando el método filter para buscar el elemento
// let elementosFiltrados = array.filter(function(elemento) {
// 	return elemento === elementoABuscar;

// }

// );

// // Mostrar el resultado
// console.log(elementosFiltrados); // Devolverá [30], ya que es el único elemento que es igual a 30 en el array.
	return (
		
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas</h1>
				<div className='counter-todos'>
					<h3>
						N° Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TaskAdd handleNewTodo={handleNewTodo} />
				</div>

				<TaskList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
      <div className='card-to-do'>
				<h1>Lista de contactos</h1>
        {/*cambiar clases para que sean de contacto, o hacer clases genericas*/}
				<div className='add-todo'>
					<h3>Agregar Contacto</h3>
					< ContactAdd handleNewContact={handleNewContact} />
				</div>

				<ContactSearch 
				contacts={contacts}
				handleSearchContact={handleSearchContact}
				/>
				<ContactList
				contacts={contacts}
				handleUpdateContact={handleUpdateContact}
				handleDeleteContact={handleDeleteContact}
				/>
			</div>
		</>
	);
}

export default App;