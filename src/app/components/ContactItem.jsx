"use client"
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { ContactUpdate } from './ContactUpdate';

export const ContactItem = ({
	contact,
	handleUpdateContact,
	 handleDeleteContact,
	
}) => {
	return (
		<li>
			
			<ContactUpdate contact={contact}  handleUpdateContact={handleUpdateContact} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteContact(contact.id)}
			>
				<FaTrash />
		</button>
		</li>
	);
};

//line 19  handleUpdateTodo={handleUpdateTodo} 