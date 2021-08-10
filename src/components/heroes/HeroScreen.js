import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import "../../index.css";
export const HeroScreen = ({history}) => {

/* Es "heroId" porque en el path del Route en DashboardRoutes escribí path="/hero/:heroId" y es por eso
   que tengo que desestructurarlo con el nombre de "heroId" ya que al ser un objeto TIENE QUE TENER el mismo
   nombre que le di en el objeto, en este caso en el "path". Verificar en ir a la consola>HeroScreen>params>
*/
    const {heroId} = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);
/*Mando a llavar el heroe según el "heroId" del heroe obtenido anteriomente desde la "url" y almaceno la respuesta en "hero", 
la respuesta será un objeto. */
    //const hero = getHeroById(heroId);

    /*Verifico que haya un hero (!hero = no hay hero) en caso el heroId no exista, o sea se haya enviado 
    un url no valido, entonces lo Redirecciono a la página de Marvel con el "Redirect"*/
    if(!hero){
        return <Redirect to="/" />;
    }

    const handleReturn = ()=>{
        
        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

   const {
       superhero,
       publisher,
       alter_ego,
       first_appearance,
       characters
   } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5 className="white-text">Characters</h5>
                <p className="white-text">{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
           </div>

        </div>
    )
}

/*
-Utilizaremos el hook "useMemo" de React para recordar cuando se utiliza la función y no se cargue en todo momento, sino
que SOLO SE VUELVA A EJECUTAR LA FUNCION getHeroById cuando cambien el "heroId", sino que NO SE EJECUTE, mientras no cambie.

--Le agregamos animaciones de animate.css mediante cdn.

*/