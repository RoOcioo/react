import React from "react";
import Add from './composants/Add';
import List from './composants/List';
import Pay from './composants/Pay';
import Button from './composants/Button';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {

  constructor() {
    super()
  
  
    this.state = {
      activeTab: 'add',
      items: []

    };
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
  }

  selectAdd() {
    this.setState({
       activeTab: 'add' 
      });
  }

  selectList() {
    this.setState({ 
      activeTab:
       'list' 
      });
  }

  selectPay() {
    this.setState({ activeTab:
       'pay' 
      });
  }

      render () {
        return(
          <div className="container d-flex justify-content-center">
          <div className="d-flex flex-column">
  
            <h1 className="h1" style={{textAlign: 'center'}}>Bakery</h1>
            <div className="d-flex flex-row justify-content-start">
              <Button isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</Button>
              <Button isSelected={this.state.activeTab} onClick={this.selectList} >List</Button>
              <Button isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</Button>
            </div>
  
          
          </div>
        </div>
      )
    }
  }
  
 

  

export default App;
