import { ContactList } from './components/ContactList';

export const TaskReducer = (initialState, action) => {
  // La expresión que se evalúa en un switch se coloca entre paréntesis
  //en este caso la expresión que se evalúa es el tipo de acción
  switch (action.type) {
    case "Add Todo":
      return [...initialState, action.payload];

    //Utiliza el método filter para crear una nueva matriz con todas las tareas excepto
    // la tarea que coincide con el id especificado en action.payload.
    case "Delete Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "Complete Todo":
      return initialState.map((todo) => {
        // Compara el id de cada tarea con el action.payload, que se espera
        // que contenga el id de la tarea que se marcará como completada.
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    case "Update Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description,
          };
        }

        return todo;
      });
    //CONTACTS
    case "Add Contact":
      return [...initialState, action.payload];
    case "Delete Contact":
      return initialState.filter((contact) => contact.id !== action.payload);

    case "Update Contact":
      return initialState.map((contact) => {

     // En caso de que el id del contacto coincida, 
        if (contact.id === action.payload.id) {
    //se crea y retorna un nuevo objeto con los mismos 
    //valores del contacto actual (...contact) pero 
    //actualizando la propiedad description con el valor que se encuentra
    // en action.payload.description. Se utiliza la sintaxis de spread 
    //...contact para crear una copia del contacto original y sobrescribir 
    // la propiedad description con el nuevo valor.
          return {
            ...contact,
            description: action.payload.description,
          };
        }

        return contact;
      });
    case "Search Contact":
      //elemento a buscar = Angela (descripcion)
      //array en el que buscar elemento = contacts
      //prueba con nombre random
     // let SearchedElement = "Angela";

     case "Search Contact":
      let ClonArrayInitialState = JSON.parse(JSON.stringify(initialState)); // Clon profundo
      let SearchedElement = action.payload.description;
      console.log(SearchedElement);
      const FilteredElements = ClonArrayInitialState.filter(function (element) {
        return element.description === SearchedElement;
      });
      console.log(FilteredElements);
    
      if (action.payload.description.length <= 1) {
        return initialState; // Si la búsqueda es corta, devuelve el estado inicial
      } else {
        return [...FilteredElements]; // Devuelve una nueva copia de los elementos filtrados
      }

      //if else/ - if boton reset onclick, volver a mostrar initialstate?
      
    //ahora mismo borra todo lo que no sea FilteredElements
       
      
      
    // const { searchTerm } = action.payload; //captura de input de búsqueda
    // const filteredContacts = initialState.filter(contact =>
    //   contact.description.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // console.log(searchTerm)
    // return {

    //   ...initialState,
    //   filteredContacts: filteredContacts
    //   }

    default:
      return initialState;
  }
};
