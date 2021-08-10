import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

//Aca recibo el "publisher"
export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    //Alamacenare los heroes filtrados por el "publisher" que envio desde este Componente a "getHeroesByPublisher"
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id} 
                        {...hero} 
                    />
                ))
            }
        </div>
    )
}

/*
En este componente mostraré el listado de heroes.
-Aca recibiré mi publisher: -DC Comics
                            -Marvel Comics

-La expresión de Javascript va entre llaves "{...}"
-Este componente listará los heroes que estan en mi "base de datos ficticia llamada "data" " según el
valor del publisher que se pase y este se pasará desde cada componente en el cual se use este componente
"HeroList", este componente solo se encargará de hacer el listado y recorrer segun el valor pasado.

-Notar que el parámetro que recibe se llama "publisher" tal cual se debe llamar el prop que le paso
si es que lo utilizo desde otro componente.

-Teniamos todo adentro de un "<ul></ul>" ahora lo cambiamos por un "div" y le dimos la clase className="card-columns"

-Al "HeroCard" le mando todas las props del "hero" mediante el spread operator: {...hero}   <--Asi le enviaría TODOS SUS props

-Utilizamos "useMemo" para recordar la funcion getHeroByPublisher y que no se este ejecutando en todo momento, que SOLO
SE VUELVA A EJECUTAR CUANDO CAMBIE "publisher", sino NO .

-Le agregamos animaciones de animate.css mediante cdn

*/
