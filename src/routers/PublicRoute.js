import React from 'react'
import PropTypes from "prop-types";

import {Route, Redirect} from "react-router-dom";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated) ?
                    (<Component {...props}/>)
                    :(<Redirect to="/" />)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
/*
-No es más que un "Functional component" común y corriente.
-Este se encargará de manejar mis rutas públicas.
-Esta ruta pública no es más que la ruta privada con un cierto cambio...
-Si no está autenticado "!usAuthenticaded" entonces mostraré el "Component" y si está autenticado
lo redireccionaré al "DashBoard" "<Redirect to... />" .
*/