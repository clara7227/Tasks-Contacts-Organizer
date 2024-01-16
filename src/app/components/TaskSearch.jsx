"use client"
import React from 'react';
import { useState } from 'react';
import { useForm } from '../hooks/UseForm';

export const ContactSearch = ({
    //contacts es una propiedad que recibe del padre -page
    contacts,
    handleSearchContact
}) => {


    const { description, onInputChange, onResetForm } = useForm({ //iniciar el formulario
        description: '',
    });
    const onFormSubmit = e => {
        //importante: se previene la carga de la página
        e.preventDefault();
        //pilla descripcion
        console.log(description);
        //pilla array de contactos
        console.log(contacts);


        //  console.log('Contactos coincidentes:', filteredContacts);

        // Manejar los contactos filtrados, por ejemplo, puedes pasarlos al padre
        handleSearchContact(description);

        //     handleSearchContact(description);
        // onResetForm();
    };
    return (
        <form className="SearchInput" onSubmit={onFormSubmit}>
            <div>
                <span className="material-icons">search</span>

                <input
                    type='text'
                    className='input-add'
                    name='description'
                    value={description}
                    onChange={onInputChange}
                    placeholder='Busca el contacto'
                />
            </div>
            <button className='BtnSearch' type='submit'>
                Buscar
            </button>
            <button
                onClick={() => onResetForm()}
                className='btn-delete' type='submit'>
                limpiar busqueda
            </button>
        </form >

    );
}