import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, Route, Link, Switch } from "react-router-dom"
import Films from './composants/Films.jsx'
import films from '../../../../backend/api-catalogfilms-react/dataFilms.js';

class App extends React.Component{
constructor() {
  super()

  this.state = {
    filmsArr: []
  }
}

componentDidMount() {
const url = "http://localhost:8000/films/" 

fetch(url)
    .then(response => response.json())
    .then(films => {
        console.log("films", films);

      this.setState= ({
        filmsArr: films
      })
    })
  }

  render() {
    return(
<Router>
  <div className="container">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
               <a className="navbar-brand" href="/">Films</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>

       </nav>
  
    <Switch>
    <Route exact path="/films"></Route>
render(){
  return
  
  <Films />

<div className="row">
<div className="col-6 offset-3" >Image : {films.image}</div>
</div>
<div className="row">
<div className= "col-6 offset-3">Id : {films.id}</div>
</div>
<div className="row">
<div className="col-6 offset-3">Film : {films.title}</div>
</div>
<div className="row">
<div className="col-6 offset-3">Director : {films.director}</div>
</div>
<div className="row">
 <div className="col-6 offset-3" >Description : {films.description}</div>
 </div>
        
     
    
   

</Switch>
</div>
    </Router>
    )
  }
}



export default App;
