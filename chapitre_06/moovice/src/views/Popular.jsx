
import React, { Component } from 'react';
import Card  from '../components/Card'

class Popular extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        const url = "http://localhost:8000/movies/popular"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in popular component did mount", data);

                this.setState({
                    movies: data.dataPopularMovies.results
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Popular</h1>

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

export default Popular;
