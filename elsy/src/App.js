import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "./components/Box";
import './styles/global.css';



const tempMin=`-20`
const tempMax= `40`
const heartMin=`80`
const heartMax=`180`
const stepsMin= `0`
const stepsMax= `50000`


class App extends React.Component {
  render() {

    return (
      <div className= "container-fluid"> 
      <div className= "row">
        <Box />
        

        <Box icon= "local_drink"color= "#3A85FF"value= {1.5}unit="L"/> 
        <Box icon= "directions_walk" value= {3000} unit="steps" color="black" />
        <Box icon="wb_sunny" value={-10} unit="°C" color="yellow" />
        <Box icon="favorite"value={120}unit= "bpm" color="red"/>
        

            
      
    
        <p>
        gitHeart : 80
        Temperature : -20
        Steps : 0
        </p>
      </div>
      </div>
    );
  }
}

export default App;