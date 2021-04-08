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
        

       
        <div className= "box col-sm-3 col-6">
         <component icon: {${directions_walk}}{"favorite"}{"wb_sunny"} />
           <component color: {"black"}{ "red"}{ "yellow"} />
            
      
    
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