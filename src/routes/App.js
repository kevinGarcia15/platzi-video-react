import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Registro from '../containers/Registro'
import Player from '../containers/Player'
import NotFound from '../containers/NotFound'
import Layout from '../Components/Layout'

const App = ()=>(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/player/:id" component={Player}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
</BrowserRouter>
)

export default App
