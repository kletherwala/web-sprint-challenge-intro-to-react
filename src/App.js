import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starwars, setStarwars] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data);
      setStarwars(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starwars.map((info, i) => {
        return <Character key={i} name={info.name} birthyear={info.birth_year}/>
      })}
    </div>
  );
};


export default App;
