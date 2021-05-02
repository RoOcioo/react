import React from 'react';
import Card from './Card';


class Pay extends React.Component {

    constructor() {
        super()
    

    this.state = {
        basket: [],

        total: 0,
        totalTVA: 0,
        totalEcoTax: 0,
        totalTTC: 0
    }
    this.handleSelect = this.handleSelect.bind(this);
    
    }

    handleSelect(name, price) {
    console.log("name", name)
    console.log("price", price)
    
    // const newTotal =+ price,
    // const newtotalTVA= newTotal+ 20/100
    // const totalTVA= newtotalTVA+newTotal
    // let newTotalEcoTax = this.state.totalEcoTax + 0.3;

        // this.setState({
        //     basket:{
        //         name,
        //         price
        //     },
        //     total: newTotal,
        //     totalEcoTax: newTotalEcoTax,
        //     totalTVA: totalTVA,
        //     totalTTC: newTotalEcoTax+newTotalTva
        // })

    }
    render() {
    return ( 
        <div>
     <Card productName="croissant.png"/>
     {this.props.items}
    <p>{this.state.total}</p>
    
    <ul>
    
       
        {this.props.items.map((elem => {
            return <li><Card productName={elem.name} price={elem.price} onClick={this.handleSelect} /></li>
        }))}
        </ul>
        </div>
        
    )
}
}

export default Pay;