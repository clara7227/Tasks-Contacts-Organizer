"use client";

import { useTask } from "./hooks/useTask";
import Image from "next/image";
import { useState } from "react";
//no funciona porque no me deja instalar el paquete npm 
import { useRouter } from 'next/router';
import Link from "next/link";


function App() {
  //alert("El usuario es `usuario@ejemplo.es`, y la contraseña es `contraseña`");

  //definicion de variables

  const [inputPasswordValue, setInputPasswordValue] = useState();
  const handleInputChange = (event) => {
    // Actualiza el estado con el nuevo valor del input
    setInputPasswordValue(event.target.value);
  };

  //VERIFICACION CORREO
  const HandleVerification = () => {
    if (inputPasswordValue == password) {
      alert("El usuario y contraseña si coinciden");
	const LoginCorrect = true;
    } else {
      alert("El usuario y contraseña no coinciden");
	  const LoginCorrect = false;
    }
  };
  const password = "contraseña";
  console.log(inputPasswordValue);
  return (
    <div className="App">
      <div className="containerLogin">
        <Image src="/img/image_3.png" width={540} height={760} />
        <div className="CardLogin">
          <div class="LogoLogin">2DO/2DAY</div>
          <div className="LoginContent">
            <h3>Welcome back </h3>
            <p>Please enter your details</p>
            <div className="LoginInputs">
              <form className="ItemAddForm">
                <input
                  type="text"
                  className="input-add"
                  name="description"
                  placeholder="Email"
                  value="usuario@ejemplo.es"
                />
                <input
                  type="text"
                  className="input-add"
                  name="description"
                  value={inputPasswordValue}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </form>
            </div>
            <div className="LoginButtons">
              <button
                onClick={HandleVerification}
                className="BtnAddItem"
                type="submit"
              >

<Link href= "./pages/tasks">
                        Log In  </Link>
				 {/* <Link href={LoginCorrect ? "" : "./tasks"}>
                        Log In  </Link> */}
               
              </button>
              <button className="BtnAddGoogle" type="submit">
                Log In with Google
              </button>
            </div>
          </div>
          <div className="Singup">
            Don't have an account? <b>Sing up</b>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
