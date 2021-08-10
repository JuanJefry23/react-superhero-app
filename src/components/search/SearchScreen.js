import React, { useMemo } from 'react';
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
     const location = useLocation();
//En caso sea undefined le establezco que "q" sea un string vacío.
    const {q = ""} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
//Aunque refresque el navegador, la url tendrá aun el queryString y en el input se mantendrá el valor buscado gracias a lo siguiente:
        searchText: q
    });
    const {searchText} = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e)=>{
        e.preventDefault();
        //Establezco el query, puede ser "?q=" o "?query=" .
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            
                        >
                            Search...
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q==="") 
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        (q!=="" && heroesFiltered.length===0)
                            &&
                            <div className="alert alert-danger">
                                There is no a hero with {q}
                            </div>
                
                    }

                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

/*
-Al pasarle {...hero} al "HeroCard" le estoy pasando todas sus propiedades.

-Cuando el "url" cambie quiero usar un "QueryString" para poder obtener ese "Query" para poder aplicar el "Query" en
"SearchScreen.js" esto me mantendrá la historia, para esto utilizaremos:
                                                                         - {history} : recibido como parámetro en la función
                                                                         - history.push(`?q=${searchText}`) : Este pondra en la url el
                                                                         enlace detallado en el argumento del "push" al momento de dar
                                                                         el submit del formulario, ya que este se encuentra adentro de
                                                                         "handleSubmit".

-Para poder leer el "Query" utilizo las props de "react-router-dom": -Puedo importar el "location" en los parámetros tal como lo hice 
                                                                     con "history", pero en vez de eso utilizaré el "hook" de "react-router-dom"
                                                                     para obtener la "location": const location = useLocation();
                                                                     -Instalaremos el "query-string" de npm, este nos ayudará a obtener el
                                                                     query de nuestra "url".Más info en: https://www.npmjs.com/package/query-string

*/