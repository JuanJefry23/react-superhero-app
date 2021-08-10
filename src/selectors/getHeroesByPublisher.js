import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) =>{

/*
Hacemos una buena práctica que si el usuario me escribe un "publisher" que no es aceptado o no es válido
entonces voy a lanzar un error:
*/
const validPublishers = ["DC Comics","Marvel Comics"]; //Con este arreglo valido.
//Validamos
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher " ${publisher} " no es correcto`);
    }

    //Voy a filtrar el arreglo con el "publisher"
    return heroes.filter(hero=>hero.publisher===publisher);
    
}

/*
-Este será el mád dificil

-En la validación: "!validPublishers.includes(publisher)" esto significa que si NO encuentra el "publisher" enviado, entonces
que me lanze el error. O sea si el publisher enviado NO COINCIDE con alguno de los elementos del "validPublishers", entonces
que me lanze el error.
*/