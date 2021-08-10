import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card ms-3" style={{maxWidth:540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img " alt={superhero} />
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text ">{alter_ego}</p>

                        {
                            (alter_ego !== characters)
                                && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`./hero/${id}`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
            {superhero}
        </div>
    )
}


/*

-Estas serán las tarjetas de los heroes que mostraremos tendrán una imagen y su descripción., estas se envian al componente
"HeroList".
-No tendremos un warning en la consola porque no tenemos variables, sino que son props que no siempren las vamos a utilizar.
-Creamos un botón, el cuál es un enlace que tendra de nombre "Más..." y al hacer click en este nos llevará a una página que
nos muestre más información acerca de ese heroe.

*/