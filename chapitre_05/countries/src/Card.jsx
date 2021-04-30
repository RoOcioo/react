import React from 'react';
import './styles/styles.css';

class Card extends React.Component {

render() {
    return (
        <section style={{
            padding:'20px',
        }}>
        <div className="d-flex flex-column align-items-center">
        <span><img src= {this.props.flag} alt="flag"></img></span>
        <span className= "h2">Country : {this.props.name}</span>
        <span className= "h3">Capital : {this.props.capital}</span>
        <div className="mt-3 mb-3">
        <span style={{ fontSize: '18px' }} className="material-icons">
                            icon="public"
        
        Region : {this.props.region}</span>
        <span style={{ fontSize: '20px' }} className="material-icons"
                            icon="people"> Population : {this.props.population}</span>
        

    </div>
        </div>
        </section>
    )
}

}

export default Card;