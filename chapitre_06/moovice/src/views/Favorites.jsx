import React, {Component} from 'react';
import Card from '../components/Card'
import { getMovieAPI } from '../utils/Api'


export class Favorites extends Component {

    state = {
        movies: [],
        favIDs: this.getStorage()
    }

    getStorage() {

        const favorites = JSON.parse(localStorage.getItem("favorites"))
        console.log("Favorites tyepof favorites", typeof(favorites))
        return favorites
    }

    
    getMovie(id) {

        getMovieAPI(id)

        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log("Favorites data", data)

                this.setState({
                    movies: [...this.state.movies, data]
                })



            })

    }

    componentDidMount() {
        
            this.state.favIDs.map(item => {
                
                return this.getMovie(item)
            })
        
    }

    render() {
        return (
            <div className="container">
            <h1 className="text-center">Favorites</h1>

            <div className="row">
                {
                    this.state.movies.map(elem => {
                        return (
                            <div className="col-6">
                                <Card {...elem} />
                            </div>
                        )
                    })
                }
        </div>
        </div>
        );
    }
}

export default Favorites;

