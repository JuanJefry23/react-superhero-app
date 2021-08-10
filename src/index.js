import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

ReactDOM.render(
    <HeroesApp />,
  document.getElementById('root')
);


/*
DOCUMENTACIÓN DEL PROCESO DEL PROYECTO:

1°) Cree el proyecto: npx create-react-app heroes-app , cree la carpeta assets adentro de public
    en el cual guarde la carpeta con las imagenes de los personajes, de la carpeta "src" borre todo menos "index.js" y 
    cree el PRIMER componente "HeroesApp.js"

2°) 
    a)En la terminal de este proyecto instalo: npm install react-router-dom
    b)Más detalles en la página web : https://reactrouter.com/web/guides/quick-start
    c)Creo la carpeta "components" dentro de "src" y dentro de components creo carpetas con sus respectivos componentes
      dentro de las mismas, Loginscreen, MarvelScreen, etc.
    d)Creamos la carpeta "routers" : src>routers>AppRouter.js , y dentro de la carpeta "routers" creo el componente
      llamado "AppRouter.js", este nombre "AppRouter" por convención se le pone al sistema de rutas principal de la 
      aplicación.

3°)Creo mi componente "DashboardRoutes" no es más que un simple functional component solo que tiene un "<switch>...</switch>"

4°)Creo el componente "HeroList.js" adentro de src>components>heroes>HeroList , en este componente mostraré
   el listado de los heroes.

5°)Me crearé un par de selectores, estos selectores me ayudaran a filtrar la infomación de mi "HeroList" o a traer lo 
  que yo necesito en la siguiente ruta: src > selectors > "Aca creo los siguientes selectores"
  a)Primer selector: "getHeroById.js"
  b)Segundo selector: "getHeroesByPublisher.js"

6°) Ahora en src>components>heroes>HeroCard.js , creo el componente "HeroCard.js"

7°)Crearemos un componente llamado "SearchScreen.js" en src>components>search>SearchScreen.js y crearemos un enlace en
el navBar para la opción "Search".

8°)Crearé en la carpeta de selectores a un nuevo selector "getHeroesByName.js"

---------------------------SECCIÓN 15: "PROTECCIÓN DE RUTAS"----------------------
9°)Creamos dos carpetas en src : "auth" y "types"

10°) Creamos "authReducer.js" adentro de la carpeta "auth".
*/
