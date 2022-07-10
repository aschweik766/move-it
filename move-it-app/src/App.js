import Header from "./Components/Header";
import  { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import Home from "./Pages/Home";
import SearchResults from "./Components/home/SearchResults";
import Searchbar from "./Components/home/Searchbar";
import FilterSearch from './Components/home/FilterSearch';
import ExercisesDisplay from './Pages/ExercisesDisplay';
// import LastSearched from './Components/home/LastSearched';

function App() {
  const [exercises, setExercises] = useState()
  const [exerName, setExerName] = useState([])
  const [searchString, setSearchString] = useState('');
  // const [lastSearch, setLastSearch] = useState('');
  const url = `http://localhost:3001/exercises`
  const urlId = `http://localhost:3001/exercises/${searchString}`

  const getExercises =  () => {
     fetch(url)
     .then(response => response.json())
     .then(response => setExercises(response))
     .catch(err => console.error(err));
 }

 const getExerByName = async (searchString) => {
    const response = await fetch(urlId);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setExerName(responseJson.Search);
		}
	};

  useEffect(() => {
    getExercises()
    getExerByName(searchString)
  }, [searchString])

  console.log(exercises)

  const handleChange = (event) => {
    setSearchString(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getExercises(searchString);
  }
  

  return (

    <div className='container-fluid moveit-app'>
      <Header/>
  
			<div className='row d-flex align-items-center mt-4 mb-4'>
        <Searchbar searchString={searchString} setSearchString={setSearchString} handleChange={handleChange} handleSubmit={handleSubmit} />
          <Routes> 
            <Route path="/exercises" element={<ExercisesDisplay exercises={exercises} getExercises={getExercises}/>}/> 
            <Route path="/exercises/:id" element={<SearchResults exercises={exercises} exerName={exerName} getExerByName={getExerByName} searchString={searchString}  />}/> 
            <Route path="/exercises/:name" element={<SearchResults exercises={exercises} exerName={exerName} getExerByName={getExerByName} searchString={searchString}  />}/> 
            
            
          </Routes>
          <div className='row'></div>
            <div className='col'><FilterSearch /></div>
            {/* <div className='col'><LastSearched lastSearch={lastSearch}/> </div> */}
        </div>
    
    </div>

  );
}

export default App;
/* // lastSearch={lastSearch}
// setLastSearch(searchString);
// setSearchString('')
<div className="App">
      <Header /> 
      <Routes>
        <Route path="/homepage" 
        element={<Home exercises={exercises} searchString={searchString} setSearchString={setSearchString}  handleChange={handleChange}
        handleSubmit={handleSubmit} getExercises={getExercises}/>}/>
        {/* <Route path='/:id' element={<SearchResults exercises={exercises}/>}/> */
        /* <Route path='/exercises' element={<SearchResults exercises={exercises}/>}/>
      </Routes>
    </div> */
    
    // if(!exercises) {
    //   return(
    //     <>
    //       <h3>Loading Results</h3>
    //     </>
    //   )
    // }

    // const responseJson = await res.json();

    // if (responseJson.Search) {
    //   setExercises(responseJson.Search)
    // }