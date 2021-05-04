import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, Route, Link, Switch } from "react-router-dom"
import Films from './composants/Films.jsx'
import Filmid from './composants/Filmid.jsx'

class App extends React.Component{
  render() {
    return(
<Router>
  <div className="container">
    <h1>Hola</h1>
  
    <Switch>
    <Route path="/films" Component= {Films} />
    <Films />
    <Route path="/films/:id" Component={Filmid} />
    <Filmid />


</Switch>
</div>
    </Router>
    )
  }
}



export default App;
