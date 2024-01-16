"use client";
import React from "react";
import "material-icons/iconfont/material-icons.css";
import { TaskAdd } from "../../components/TaskAdd";
import { TaskList } from "../../components/TaskList";
import { useTask } from "../../hooks/useTask";
import { Nav } from "../../components/Nav";
import Image from "next/image";
import { useState } from "react";
import { TaskSearch } from "../../components/TaskSearch"

const TasksPage = () => {
  const {
    //definicion de variables
    todos,
    // todosCount,
    // pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTask();

  const [OpenedOverlay, setOverlayAdd] = useState(true);

  // Función para cambiar la clase al hacer clic
  const OpenOverlayAdd = () => {
    setOverlayAdd(!OpenedOverlay);
    console.log("click funciona");
  };

  return (
    <div className="App">
      <Nav></Nav>
      <div className="containerContent">
        <div className="card-to-do">
          <div className="ActionHeadline">
            <h4>My Tasks</h4>
            <button onClick={OpenOverlayAdd} className="AddTask">
              <span className="material-icons">add</span>
            </button>
          </div>
          <div className={`add-todo ${OpenedOverlay ? "NoDisplay" : ""}`}>
            <TaskAdd handleNewTodo={handleNewTodo} />
          </div>
          <div
            className={OpenedOverlay ? "" : "Background"}
            onClick={OpenOverlayAdd}
          >
            {" "}
          </div>
          {/* ESTE SEARCHINPUT NO FUNCIONA, el que empieza a funcionar es el de contactos
          eeste es solo para visualizarlo*/}
          <form className="SearchInput" >
            <div>
                <span className="material-icons">search</span>

                <input
                    type='text'
                    className='input-add'
                    name='description'
                    value=""
                    onChange=""
                    placeholder='Search task'
                />
            </div>
            <button className="BtnSearch" type='submit'>
                Buscar
            </button>
            <button
                className='btn-delete' type='submit'>
                limpiar busqueda
            </button>
        </form >
          {/**   handleSearchContact={handleSearchContact}  
           * handlesearchcontact habra que cambiarlo por handlesearch task*/}
          <TaskList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </div>
        <div className="TimeAvailable">
          <h4>My Time</h4>
          <Image src="/img/group_4.png" width={540} height={420} />
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
