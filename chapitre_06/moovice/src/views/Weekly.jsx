import React from 'react';
import Card from '../components/Card'
import { getLatestMovies } from '../utils/Api'

const moment = require("moment");

export default class Weekly extends Component {

    state = {
        movies: []
    }
    formatDateToday(dateString){

        const dateToday = moment(dateString).format("YYYY-MM-DD")
        return dateToday
    }
    
    
    
    formatDateLastWeek(dateString){

        const lastWeek =  moment(dateString).subtract(6, 'days').format("YYYY-MM-DD")
        return lastWeek
    }
    


    componentDidMount() {


        const url = "http://localhost:8000/movies/weekly";
        fetch(url)
        .then(response => response.json())
        .then(data => {
         
          this.setState({
            movies: data.dataWeeklyMovies.results,
            
          });
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Weekly</h1>

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

