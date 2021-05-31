import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Students</h1>

      <Switch>
        <Route path="/" exact>
          <List />
        </Route>
        <Route path= "studentAdded" exact>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
   
  )
}


