import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

//Sistema de rutas principal de la aplicación:
export const AppRouter = () => {

    const {user}=useContext(AuthContext);

    return (
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <PublicRoute 
                            exact 
                            path="/login" 
                            component={LoginScreen}
                            isAuthenticated={user.logged}
                        />
                        <PrivateRoute 
                            path="/" 
                            component={DashboardRoutes}
                            isAuthenticated={user.logged}
                        />
                    </Switch>
                </div>
            </Router>
       
    )
}

/*
-Es un functional component común y corriente, pero su contenido es algo diferente.
-Al llamarlo "AppRouter" por convención significaría que es el sistema de rutas principal de la aplicación.

-Al ser este el sistema de rutas principales de la aplicación solo tendremos el del "Login" (El cual no aparecerá
 con el NavBar) y el componente "Dashboardroutes" el cual contiene a TODAS LAS RUTAS HIJAS LAS CUALES APARECERÁN 
 CON EL NAVBAR.

-Tengo que hacer privado mi Route con path="/" y component={DashboardRoutes} , entonces cambio el 
"Route" por PrivateRoute (tengo que importar este componente), además tengo que usar el useContext
para obtener el "user" y validar si está logueado o no.

-Al Route del componente del "LoginScreen" lo cambio por "PublicRoute" y le tengo que pasar
   isAuthenticated={user.logged}
*/