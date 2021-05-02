import React from 'react';
import './App.css';

// function Helloworld(props)
// {
//   return (
//     <div id="hello">{props.mytext}</div>
//   )
// }

class Helloworld extends React.Component {
  constructor() {
    super();
  this.state = {
    show: true
  }
this.toggleShow = this.toggleShow.bind(this)
  }
  toggleShow ()
  {
    this.setState ({
      show: !this.state.show
    })
  }
  
  render()
  {
    if(this.state.show) {
    return (
    <div id="hello">
    <h3>{this.props.subtitle}</h3>
    {this.props.mytext}
    <button onClick={this.toggleShow}>Click me!</button>
    </div>
  )
} else {
  return (
    <h1>there are not elements
    <button onClick={this.toggleShow}>Toggle Show</button>
    </h1>
  );
}
  }
}


function App(){
  return (
    <div>
      Component: 
      <Helloworld mytext= "Hola" subtitle= "Spanish" />
      <Helloworld mytext= "Hello" subtitle= "English" />
      <Helloworld mytext= "Salut" subtitle= "French" />
      </div>
  );
}


export default App;
