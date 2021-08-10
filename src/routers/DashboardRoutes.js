import React from 'react'
import { Navbar } from '../components/ui/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

//Este contiene a TODAS LAS RUTAS HIJAS, como no es sistema de rutas principal NO TIENE EL "<Router>...</Router>"
//....Solo el "<Switch>...</Switch>"
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen}/> 
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
            
        </>
    )
}



/*

-La diference con el sistema de rutas principal "AppRouter" es que esta tiene al "<Router>...</Router>", mientras que 
 esta "DashboardRoutes.js" NO tiene "Router" solo tiene "switch"

 -Este componente "DashboardRoutes" contendrá a las rutas hijas, solamente tendrá el "<switch></switch>" para poder
 mostrar un componente (página) en base a una condición.
 
 -De esta manera podemos tener cualquier cantidad de rutas adicionales en nuestra aplicación, estas rutas adicionales
 deben estar en un componente como este que NO ES EL PRINCIPAL, EL PRINCIPAL ES "AppRouter.js".

 -Notar como es el path de "HeroScreen" , path="hero/:heroeId", este "Route" se activará cuando haga
 click en el enlace "Más..." del card del heroe.
*/