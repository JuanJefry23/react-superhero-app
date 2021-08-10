import React, { useReducer,useEffect } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import "./index.css";
import { AppRouter } from './routers/AppRouter';

const init = () => {
//Si existe lo parsea y lo devuelve y SI N0 EXISTE devuelve un "logged:false" 
  return JSON.parse(localStorage.getItem("user")) || {logged:false};
}
export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {} , init);

//Para que el usuario se quede grabado
  useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user));
  }, [user])

    return (
      <AuthContext.Provider value={{user, dispatch}}>
        <AppRouter/>
        </AuthContext.Provider>
    )
}


/*
-El "reducer" que utilizo es el "authReducer".
-El "initialState" por el momento es un objeto vacío.
-Siempre creo el "init" porque voy a leer el "localStorage".
-Cambio el nombre del "state" por "user".
-Y el "user" y el "dispatch" será lo que yo distribuya en value de mi AuthContext y tendré la habilidad
de poder hacer "dispatch" y obtener el "user" a lo largo de cualquier parte de mi aplicación, porque
estoy en un nivel muy alto de mi aplicación, el más alto es el "index.js".
*/