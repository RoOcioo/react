import React from 'react';


class Card extends React.Component{

    constructor() {
        super()

        this.state = {
            image: '../../public/images/item.png'
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/' + this.props.itemName + '.png')
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
                <button className='imgButton'
                    style={{ backgroundImage: `url(${this.state.image})` }}
        onClick={() => this.props.onClick(this.props.productName, this.props.price)}></button>
    </div>
        )
}
}

export default Card;