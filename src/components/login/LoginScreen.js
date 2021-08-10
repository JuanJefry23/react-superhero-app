import React, { useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import "../../index.css";

//Hacemos el destructuring del prop "history" que nos brinda el "react-router-dom"
export const LoginScreen = ({history}) => {
  
    const {dispatch}=useContext(AuthContext);

    const handleLogin = ()=>{

//Obtengo el "lastPath" en caso no haya que me almacene la ruta general "/"
        const lastPath = localStorage.getItem("lastPath") || '/';
//Utilizamos el método push del "history" el cual nos redirecciona a la página pasada como argumento.S 
        dispatch({
            type:types.login,
            payload:{
                name:"loggedUserName"
            }
        })
//Este "history.push("/")" tambien podría estar arriba(antes) del dispatch y TODO SEGUIRÍA funcionando
//... esto ya es propio de "react-router-dom".
        history.push(lastPath);
    }
    return (
        <div className="container">
            <div class="login-center">
                <h1>Login Screen</h1>
                <hr/>
                <button className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

/*
¿COMO HAGO PARA REDIRECCIONAR AL HACER CLICK EN EL BOTON DE "Login"?
RTa: Podriamos hacerlo con el "window.href" , pero el "react-router-dom" que hemos instalado previamente nos da props
     que podemos utilizar para redireccionarnos a otra página al hacer click en el boton "Login"
     -Tenemos props incrustadas por defecto gracias al "react-router-dom" , tenemos las props tales como "history",
      "location" , "match", nosotros utilizaremos el método push que viene en la prop "history" el cual nos 
      redireccionará a otra pantalla cuando hagamos click, para tal caso debemos poner el push adentro del método
      "handleLogin" para que se active al momento de hacer click

-Utilizo el "history" ya que es una prop brindada por "react-router-dom" tengo que desestructurarla o traerla 
mediante props, pero en este caso estoy desestructurando: {history}...

-.... Luego dentro del evento "handleLogin" utilizaré el método ".push" del history y le pasaré como argumento 
el path al cualquier me quiero redirigir : history.push("/marvel") 



*/