import React, { useState, useEffect} from 'react'


import './App.css';

function App () {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");



useEffect(() => {
 
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(dataPokemon => {
        setPokemon(dataPokemon.pokemon)      
    })
  
  
}, [pokemon])

   setPokemonType(dataPokemon.data.types[0].type.name)
   setPokemonData(dataPokemon)

 

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <form >
        <input
        type= "text"
       
        placeholder="Enter Pokemon name"
        />
      </form>
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="pokeTarjeta">
              <div className="pokeBody"></div>
              <div className="pokeRow">
              <div className="pokeTypeTitle">Type</div>
                <div className="pokeType">{pokemonType}</div>
              </div>
            </div>
            </div>
        )
      })}
    </div>
  )

  }

  export default App;