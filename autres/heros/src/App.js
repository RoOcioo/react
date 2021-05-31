import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import HerosList from './components/HerosList'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Heros</h1>


        <Switch>
          <Route path="/" exact>
            <HerosList />

          </Route>

          <Route path="heroadded" exact>

          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
