import React from 'react';
import './styles/styles.css';

class Card extends React.Component {

render() {
    return (
        <section>
        <div className="d-flex flex-column">
        <span><img src= {this.props.flag} alt="flag"></img></span>
        <span className= "h2">Country : {this.props.name}</span>
        <span className= "h3">Capital : {this.props.capital}</span>
        <span>Region : {this.props.region}</span>
        <span>Population : {this.props.population}</span>
        

    </div>

        </section>
    )
}

}

export default Card;