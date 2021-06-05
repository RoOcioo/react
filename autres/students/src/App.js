import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import List from './components/List'
import AddStudent from './components/AddStudent'
import studentAdded from './views/StudentAdded'

export default function App() {
  const [StudentAdded, setStudentAdded] = useState("");

  return (
    <BrowserRouter>
    <div className= "container">
      <h1>Students</h1>

      <Switch>
        <Route path="/" exact>
          <div className="row">
          <List />
          <AddStudent changeStudentAdded = {(name) => setStudentAdded(name)} />
          </div>
        </Route>
        <Route path= "/studentAdded/" >
          <StudentAdded name={studentAdded} />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
   
  )
}


