"use client";
import React from "react";
import { Nav } from "../../components/Nav";
import { ContactAdd } from "../../components/ContactAdd";
import { useContact } from "../../hooks/useContact";
import { ContactList } from "../../components/ContactList";
import { ContactSearch } from "../../components/ContactSearch";
import { useState } from "react";

const ContactPage = () => {
  const {
    //definicion de variables
    contacts,
    //	contactsearch,
    handleNewContact,
    handleUpdateContact,
    handleDeleteContact,
    handleSearchContact,
  } = useContact();

  const [OpenedOverlay, setOverlayAdd] = useState(true);

  // Función para cambiar la clase al hacer clic
  const OpenOverlayAdd = () => {
    setOverlayAdd(!OpenedOverlay);
    console.log("click funciona");
  };

  return (
    <div className="App">
      <Nav />
      <div className="containerContent">
        <div className="card-to-do">
          <div className="ActionHeadline">
            <h4>My Contacts</h4>
            <button onClick={OpenOverlayAdd} className="AddContact">
              <span className="material-icons">add</span>
            </button>
          </div>
          {/*cambiar clases para que sean de contacto, o hacer clases genericas*/}
          <div className={`add-todo ${OpenedOverlay ? "NoDisplay" : ""}`}>
            <ContactAdd handleNewContact={handleNewContact} />
          </div>
          <div
            className={OpenedOverlay ? "" : "Background"}
            onClick={OpenOverlayAdd}
          >
            {" "}
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
      </div>
    </div>
  );
};

export default ContactPage;
