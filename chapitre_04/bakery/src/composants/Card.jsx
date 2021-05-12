import React from 'react';
import './styles/Card.css'


class Card extends React.Component{

    constructor() {
        super()

        this.state = {
            image: './images/item.png'
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/' + this.props.productName + '.png')
        .then(res => res.blob())
        .then(urlB=>URL.createObjectURL(urlB))
        .then(urlImage =>{
            console.log(urlImage)
            this.setState({
                image: urlImage
            })
        })
    }


    render() {
        return(
        <div>
                <button className="img" onClick={() => this.props.onClick(this.props.productName, this.props.price)}>
              <img src= {this.state.image}></img>
              </button>
    </div>
        )
}
}

export default Card;