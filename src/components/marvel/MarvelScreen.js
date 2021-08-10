import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroList publisher="Marvel Comics"/>
        </div>
    )
}

/*
-Mediante el componente "HeroList" mostramos el listado de los heroes de Marvel Comics en este caso, 
NOTAR que el prop que le paso se llama "publisher" tal cual el nombre del parámetro que recibe mi
componente "HeroList", los NOMBRES DEL PROP(aca) COMO DEL PARÁMETRO DESESTRUCTURADO EN EL FUNCTIONAL 
COMPONENT "HeroList" ({publisher}) DEBEN LLAMARSE IGUAL !

*/