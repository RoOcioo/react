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
    this.addItem = this.addItem.bind(this);
  }

  selectAdd() {
    this.setState({
       activeTab: 'add' 
      });
  }

  selectList() {
    this.setState({ 
      activeTab: 'list' 
      });
  }

  selectPay() {
    this.setState({
       activeTab:'pay' 
      });
  }

  addItem(leNom, lePrix) {
    let leItem = {
      name: leNom,
      price: lePrix
    };
    let updateItems = this.state.items;

    updateItems.push(leItem);

    this.setState({ 
      items: updateItems 
    });
    this.selectList()
  }


  popItem() {
    let arrayItems = this.state.items;

    arrayItems.pop()
    
    this.setState({
    items: arrayItems
  });
  }


  renderAdd() {
    if (this.state.activeTab === "add") {
      return (
        <div>
          <Add addItem={this.addItem}/>
        </div>
      )
    } else if (this.state.activeTab === "list") {
      return (
        <div>
          <List popItem={this.popItem} items={this.state.items} />
        </div>
      )
    } else {
      return (
        <div>
          <Pay />
        </div>
      )
    }

  }


      render () {
        return(
          <div className="container d-flex justify-content-center">
          <div className="d-flex flex-column">
  
            <h1 className="h1">Bakery</h1>
            <div className="d-flex flex-row justify-content-start">
              <Button isSelected={this.state.activeTab} onClick={this.selectAdd} >Add</Button>
              <Button isSelected={this.state.activeTab} onClick={this.selectList} >List</Button>
              <Button isSelected={this.state.activeTab} onClick={this.selectPay} >Pay</Button>
            </div>
            {this.renderAdd()}
          
          </div>
        </div>
      )
    }
  }
  
 

  

export default App;
