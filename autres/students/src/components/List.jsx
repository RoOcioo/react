import { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const url = "http://localhost:9000/students"

        axios.get(url)
        .then(res => {
            setStudents(res.data)
        })
        axios.post(url, {id: "5", name: "Rocio"})
}, []);

return (
    <div>
        <h2>List Students</h2>
        <ul>
            {
                students.map(elem => {
                    return <li>{elem.name}</li>
                })
            }
        </ul>
    </div>
)}

export default List;