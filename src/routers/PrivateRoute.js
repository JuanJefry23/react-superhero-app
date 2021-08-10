import React from 'react'
import PropTypes from "prop-types";

import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

//Asi almaceno el último "pathname" que visite (Para recordar la última página visitada) lo obtengo
//...del operador "rest".
    localStorage.setItem("lastPath", rest.location.pathname)
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated) ?
                    (<Component {...props}/>)
                    :(<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
/*
-No es más que un "Functional component" común y corriente.
*/