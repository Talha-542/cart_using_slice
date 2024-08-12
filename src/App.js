// src/App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, pokemonStatusSelector, pokemonListSelector } from "./amountSlice";

function App() {
  const pokemonStatus = useSelector(pokemonStatusSelector);
  const pokemonList = useSelector(pokemonListSelector);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Pokemons</h1>

      <button onClick={() => dispatch(getPokemons())}>Get Pokemons</button>

      <h2>Pokemon Status: {pokemonStatus}</h2>
      
      {pokemonStatus === 'rejected' &&
        (<h3>Error occured when fetching pokemons</h3>)
      }

      {(pokemonStatus !== 'pending' && pokemonList !== 'rejected') &&
        (
          pokemonList.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))
        )
      }
      
    </div>
  );
}

export default App;
