import React from 'react';


class Add extends React.Component {

    constructor() {
        super()

        this.state = {
            productName: "",
            price: 1
        }
    }



        render() {
            return (
                <div className="d-flex flex-column align-items-center">
                <div className="mb-3" >
                    <div className="input-group mt-3 d-flex align-self-center">
                        <input type="text" placeholder="Item" onChange={this.updateProductName} class="form-control" aria-label="Item" aria-describedby="button-addon2" />
                        <button className="btn btn-primary" type="submit" onClick={() => this.props.addFunc(this.state.productName, this.state.price)} id="button-addon2">Add</button>
                    </div>
</div>
</div>
            )
        }

    
    }
export default Add;