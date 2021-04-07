import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Steps from "./components/Steps";



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
        <Steps />
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