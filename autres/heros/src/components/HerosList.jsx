import { useState, useEffect } from 'react'
import axios from 'axios'

const HerosList = () => {
    const [superHeros, setSuperHeros] = useState([]);

    useEffect(() => {

        const url = "http://localhost:9001/heroes"

        axios.get(url)
            .then(response => {
                setSuperHeros(response.data)
            })

    }, []);

    return (
        <div>

            <h2>List Heros</h2>

            <ul>
                {
                    superHeros.map(elem => {
                        return <li>{elem.name}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default HerosList;