import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import './styles/styles.css';


class App extends React.Component {
  constructor() {
    super()


    this.state = {
      valueToSearch: "",
      countriesFound: []
  }

  this.handleInputSearch = this.handleInputSearch.bind(this)
}

searchCountries(valueToSearch) {
  // console.log("searchCountries", valueToSearch);

  const url = "http://localhost:8000/countries/search/" + valueToSearch

  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log("data in search countries", data);

          this.setState({
              countriesFound: data
          })
      })
}

handleInputSearch(e) {
  // console.log("handleInputSearch", e.target.value);

  this.setState({
      valueToSearch: e.target.value
  })
}

render() {
  return (
    <div className="container d-flex justify-content-center">
    <div className="d-flex flex-column">
    
    <h1 className="h1 d-flex justify-content-center">Country Selector</h1>
    </div>
    
    <div className="row">
     <div className="col-4 offset-4">
            <input type="text" name="" id="" onInput={this.handleInputSearch} />
           <Button onClick={() => this.searchCountries(this.state.valueToSearch)}>Search</Button>
                    </div>
                </div>

                <div className="row">
                    {
                        this.state.countriesFound.map(elem => {
                          return <div key={elem.name} className="col-6">
      
  

    <div className="container card d-flex text-align-center">
     <Card name={elem.name} capital={elem.capital} flag={elem.flag} population={elem.population} region={elem.region}></Card>
     
     
     </div>
   
     </div>
      })
    }
     </div>
     </div>
     );
  }

  }


export default App;
