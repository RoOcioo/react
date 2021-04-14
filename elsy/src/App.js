import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "./components/Box";
import './styles/global.css';



const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    /*this.calculateWater = this.calculateWater.bind(this);*/
  }
 
    onHeartChange(e) {
      this.setState({  
        heart: e.target.value
      });
    }
    onStepsChange(e) {
      this.setState({  
        steps: e.target.value
      });
    }
    onTemperatureChange(e) {
      this.setState({  
        temperature: e.target.value
      });
    }
    /*calculateWater() {
     this.setState({
     water: 1.5,
   });
 }*/
      calculateWater() {
        let tempWater = 0;
        let heartWater = 0;
        let stepsWater = 0;

      if (this.state.temperature > 20) {
        tempWater = 0.02 * (this.state.temperature - 20)
       }

       if (this.state.heart > 120) {
        heartWater = 0.0008 * (this.state.heart - 120) 
         }
  
      if (this.state.steps > 10000) {
      stepsWater = 0.00002 * (this.state.steps - 10000) 
      }

      
       this.setState({
        water: (1.5+ tempWater + heartWater + stepsWater).toFixed
      });

  
    }
     

  render() {
   
    
     return (
      <div className="container-fluid">
        <div className="row">


          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="directions_walk" value={this.state.steps} min={stepsMin} max= {stepsMax}color="black" onChange= {this.onStepsChange}/>
          <Box icon="wb_sunny" value={this.state.temperature} unit="°C" color="yellow" min={tempMin} max= {tempMax} onChange= {this.onTemperatureChange} />
          <Box icon="favorite" value={this.state.heart} unit="bpm" color="red" min = {heartMin} max= {heartMax} onChange= {this.onHeartChange}
            
          />


          <p>Heart : {heartMin} </p>
          <p>Temperature : {tempMin} </p>
          <p>Steps : {stepsMin}
          </p>
        </div>
      </div>

    );


  }
}



export default App;