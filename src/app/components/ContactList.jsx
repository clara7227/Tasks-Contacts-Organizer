"use client"
import React from 'react';
import { ContactItem } from './ContactItem';

export const ContactList = ({
	contacts,
	 handleUpdateContact,
	handleDeleteContact,
	
}) => {
	return (
		<ul>
			{contacts.map(contact => (
				<ContactItem
					key={contact.id}
					contact={contact}
					 handleUpdateContact={handleUpdateContact}
					 handleDeleteContact={handleDeleteContact}
				
				/>
			))}
		</ul>
	);
};