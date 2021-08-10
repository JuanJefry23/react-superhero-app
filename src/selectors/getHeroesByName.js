import {heroes} from "../data/heroes";

export const getHeroesByName = (name = "") => {

//Si no escribio nada puede que este en la pantalla de inicio y NO quiero regresar nada.
    if(name===""){
        return [];
    }

    //Pasamos a minuscula lo que recibimos mediante el parámetro.
    name = name.toLocaleLowerCase();
    //Y cuando name ya tenga un valor, entonces aplico el filtro:
    return heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes(name));
}
