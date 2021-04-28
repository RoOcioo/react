import React from 'react';
import Button from "Button.jsx"


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
    this.componentDidMount = this.componentDidMount(this)

  }

  getCountry(country) {
    fetch(`https://restcountries.eu/rest/v2/name/france`)
      .then(res => res.json())
      .then(result => {

        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region,
        })
      })

  }


  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(response => response.json())
      .then(dataCountry => {
        
          this.setState({
          name: dataCountry[0].name,
          capital: dataCountry[0].capital,
          flag: dataCountry[0].flag,
          population: dataCountry[0].population,
          region: dataCountry[0].region
        })
      

})}


renderButton() {
  return (
    <div>
      <Button onClick >France</Button>
      <Button onClick>Brazil</Button>
      <Button onClick>Croatia</Button>
    </div>
  )
}

render() {

  return (
    <div>
      <div>{this.state.name}</div>

      {this.renderButton()}

    </div>

  )
} 
}

export default App;
