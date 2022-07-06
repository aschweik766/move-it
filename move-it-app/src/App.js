import Header from "./Components/Header";
import  { Routes, Route } from 'react-router-dom';
import SearchResults from './Components/home/SearchResults';
import Searchbar from './Components/home/Searchbar';
import LastSearched from './Components/home/LastSearched';

import React, { useState, useEffect } from 'react';

function App() {
  const [exercises, setExercises] = useState([])
  const [searchString, setSearchString] = useState('clamshells');
  const [lastSearch, setLastSearch] = useState('');

  const getExercises = (searchString) => {
    const url = 'http://localhost:3001/exercises'
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setExercises(res.data);
      setLastSearch(searchString);
      setSearchString('');
    })
    .catch(console.error);
  }

  useEffect(() => {
    getExercises()
  }, [])

  console.log(exercises)

  if(!exercises) {
    return(
      <>
        <h3>Loading Results</h3>
      </>
    )
  }
  

  const handleChange = (event) => {
    setSearchString(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getExercises(searchString);
  }


  return (
    <div className="App">
      <Header /> 
      <LastSearched lastSearch={lastSearch}/> 
      <Searchbar handleChange={handleChange} 
        handleSubmit={handleSubmit}
        searchString={searchString}
        />
      <Routes>
        <Route path="/exercises" 
        element={<SearchResults exercises={exercises}/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
