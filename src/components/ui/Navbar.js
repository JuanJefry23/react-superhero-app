import React, { useContext} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import "../../index.css";

export const Navbar = () => {

    const {user:{name}, dispatch}=useContext(AuthContext);

//Utilizo un hook de "react-router-dom" para obtener el "history"
    const history = useHistory();

    const handleLogout = () =>{
    //Al hacer click en el boton "logout" me redirreciona a la página de login
        history.replace("/login");
    //Luego hago un "dispatch" con el tipo "logout"
        dispatch({
            type: types.logout
        })
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
           <div class="container nav-bar">
               
               <Link
                   className="navbar-brand"
                   to="/"
               >
                   SuperHeroes
               </Link>
               <div className="navbar-collapse">
                   <div className="navbar-nav">
                       <NavLink
                           activeClassName="active"
                           className="nav-item nav-link"
                           exact
                           to="/marvel"
                       >
                           Marvel
                       </NavLink>
                       <NavLink
                           activeClassName="active"
                           className="nav-item nav-link"
                           exact
                           to="/dc"
                       >
                           DC
                       </NavLink>
                       <NavLink
                           activeClassName="active"
                           className="nav-item nav-link"
                           exact
                           to="/search"
                       >
                           Search
                       </NavLink>
                   </div>
               </div>
               <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 logout-nav">
                   <ul className="navbar-nav ml-auto">
                       <span className="nav-item nav-link text-info">
                           {name}
                       </span>
                       <button
                           className="nav-item nav-link btn"
                           onClick={handleLogout}
                       >
                           Logout
                       </button>
                   </ul>
               </div>
           </div>
        </nav>
    )
}

/*
-El "Logout" antes era un "NavLink" ahora lo cambie a un "button" y le agregue el evento "handleLogout" el cual al hacer
click en este botón me redirecciona a la página del "login" y hace un "dispatch" con el tipo "logout".

PARA PODER REDIRECCIONARME A LA PÁGINA DE "/login" lo puedo hacer con "history.replace("/login")", pero NO PUEDO TRAER
EL "history" mediante parámetros como lo hice anteriormente, en este caso con NavBar no esta dentro de las rutas no 
puedo obtener el "history" mediante parámetro, PERO SI PUEDO obtenerlo usando el hook "useHistory()" de "react-router-dom".


*/