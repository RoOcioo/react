import React from 'react';


class Add extends React.Component {

    constructor() {
        super()

        this.state = {
            productName: "",
            price: 1
        }
    
    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    }

    updateProductName(e) {
        this.setState({ 
        productName: e.target.value 
    });
    }

    updatePrice(e) {
        this.setState({
         price: e.target.value
     });
    }



        render() {
            return (
                <div className="d-flex flex-column align-items-center">
                <div className="mb-3" >
                    <div className="input-group mt-3 d-flex align-self-center">
                        <input type="text" placeholder="Item" onChange={this.updateProductName} className="form-control" aria-label="Item" />
                        <button className="btn btn-primary" type="submit" onClick={() => this.props.addingItem(this.state.productName, this.state.price)} id="button-addon2">Add</button>
                    </div>
                    <div>{this.state.price} €</div>
                </div >

                <input style={{
                width: '100%'}} type="range" min={1} max={10} value={this.state.price} onChange={this.updatePrice} />
            </div >


            )
        }

    
    }
export default Add;