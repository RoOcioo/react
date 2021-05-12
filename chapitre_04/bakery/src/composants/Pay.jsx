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
      
    const newItemBasket = {
        name: name,
        price: price
    }

    const newBasket = [...this.state.basket, newItemBasket]

    let total= 0

    for (let i = 0; i< newBasket.length; i++) {
        const element = newBasket[i];

        total += parseInt(element.price)
    }

    const totalEcoTax = newBasket.length * 0.03
    const totalTVA= total * 0.2
    const totalTTC = total + totalEcoTax + totalTVA
        this.setState({
            basket:newBasket,
            total,
            totalEcoTax,
            totalTVA,
            totalTTC
        })

    }

    renderAmountItems () {
        const result = []
        // [
        //     {
        //         name: "coffee",
        //         amount: 2
        //     },
        //     {
        //         name: "cake",
        //         amount: 1
        //     },
        //     {
        //         name: "croissant",
        //         amount: 4
        //     }
        // ]
    for (let index = 0; index < this.state.basket.length; index++) {
        const itemBasket = this.state.basket[index];
        
        const itemFound = result.find(elem => {
            return elem.name === itemBasket.name
        })

        if (itemFound === undefined) {
            result.push({
                name: itemBasket.name,
                amount: 1
            })
        } else {
            itemFound.amount++
        }
    }

    // console.log("result", result);

    return result.map(elem => {
        return <p key={elem.name}>{elem.name} x {elem.amount}</p>
    })
}

    render() {
    return ( 
        <div>
     {this.renderAmountItems()}

<p>total: {this.state.total}€</p>
<p>total TVA:{this.state.totalTVA}€</p>
<p>total eco tax:{this.state.totalEcoTax}€</p>
<p>total TTC: {this.state.totalTTC}€</p>

<div className="container">
    <div className="row">
        {
          
        this.props.items.map(elem => {
         return (
            <div className="col-6" key={elem.name}>
         
         <Card productName={elem.name} price={elem.price} onClick={this.handleSelect} />
        
        
        </div>
        
    )
})
}
</div>
</div>
</div>
    )
}
}
export default Pay;