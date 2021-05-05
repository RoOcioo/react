import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (


  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
               <ul>
                    {
                        this.props.filmsArr.map((elem, index) => {
                            return <li key={index}> <Link to={`/${elem.id}`}> {elem.title} </Link> </li>
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default Home;

       