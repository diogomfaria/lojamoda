import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Menu from './components/Menu'
import ModaFeminina from './components/ModaFeminina'
import ModaMasculina from './components/ModaMasculina'
import ModaInfantil from './components/ModaInfantil'
import Rodape from './components/Rodape'
import Sobre from './components/Sobre'

export default ()=>{

    return(
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path= '/' exact component={Home}/>
                <Route path= '/modafeminina' component={ModaFeminina}/>
                <Route path= '/modamasculina' component={ModaMasculina}/>
                <Route path= '/modainfantil' component={ModaInfantil}/>
                <Route path= '/sobre' component={Sobre}/>
            </Switch>
            <Rodape/>
        </BrowserRouter>
    )
}