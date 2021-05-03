import React from 'react';
import './styles/styles.css';

class Card extends React.Component {

render() {
    return (
        <section>
        <div className="row col-6 offset-3">
        <span><img className="img-fluid" src= {this.props.flag} alt="flag"></img></span>
        <div className="row col-6 offset-3" >Country : {this.props.name}</div>
        <div className= "row col-6 offset-3">Capital : {this.props.capital}</div>
        <div className="row col-6 offset-3">Region : {this.props.region}</div>
        <div className="row col-6 offset-3">Population : {this.props.population}</div>
        

    </div>

        </section>
    )
}

}

export default Card;