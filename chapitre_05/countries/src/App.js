import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import './styles/styles.css';


class App extends React.Component {
  constructor() {
    super()


    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    }
    this.getCountry = this.getCountry.bind(this)
    

  }

  getCountry(country) {
    fetch(`http://localhost:8000/countries/`+ country) 
      .then(response => response.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      })

  }


  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then(response => response.json())
      .then(result => {
        
          this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region
        })
      

})
.catch(err => console.error("err dans le fetch du componentDidMount:", err))
console.log('hola')
}


render() {
  return (
    <div className="container d-flex justify-content-center">
    <div className="d-flex flex-column">

    <h1 className="h1 d-flex justify-content-center">Country Selector</h1>
      <div className="d-flex flex-row justify-content-start">
      <Button onClick = {() => this.getCountry("france")}>France</Button>
      <Button onClick = {() => this.getCountry("brazil")}>Brazil</Button>
      <Button onClick = {() => this.getCountry("croatia")}>Croatia</Button>
      </div>
  

    <div className="container card d-flex text-align-center">
     <Card name={this.state.name} capital={this.state.capital} flag={this.state.flag} population={this.state.population} region={this.props.region}></Card>
     
     
     </div>
     </div>
     </div>
     );
  }
  }


export default App;
