import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Films from './composants/Films.jsx'
import Home from './composants/Home.jsx'


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
<BrowserRouter>
  
  
    <Switch>
    <Route exact path="/" render={() =>
    this.state.filmsArr.length !== 0
    ? <Home films= {this.state.filmsArr} />
    : "Please wait"
    } />

    <Route exact path="/:filmsId" render={(props) => <Films {...props} films={this.state.filmsArr} />} />

</Switch>

    </BrowserRouter>
    )
  }
}



export default App;
