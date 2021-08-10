import { heroes } from "../data/heroes"

export const getHeroById = (id) => {
    
    //Voy a filtrar el arreglo según el id enviado:
    return heroes.find( hero => hero.id===id);
    
}

/*
-Con el método "find" apenas encuentre uno(1) eso sería todo, o sea apenas encuentre ese heroe que coincida con el id
lo retornaría y eso sería todo.


*/
