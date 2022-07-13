import Header from "./Components/Header";
import  { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import Home from "./Pages/Home";
import SearchResults from "./Components/home/SearchResults";
import ExercisesDisplay from './Pages/ExercisesDisplay';

function App() {

 
  return (

    <div className='container-fluid moveit-app'>
      <Header/>
      {/* <Searchbar query={query} setQuery={setQuery}/> */}
			<div className='row d-flex align-items-center mt-4 mb-4'>
          <Routes> 
            <Route path="/exercises/" element={<ExercisesDisplay />}/> 
            <Route path="/exercises/:id" element={<SearchResults  />}/> 
            {/* <Route path="/search/" element={<SearchByNameList  />}/>  */}
            
          </Routes>
          {/* <div className='row'></div> */}
            {/* <div className='col'><FilterSearch /></div> */}
            {/* <div className='col'><LastSearched lastSearch={lastSearch}/> </div> */}
        </div>
    
    </div>

  );
}

export default App;


//sandbox


 // const [lastSearch, setLastSearch] = useState('');

  // const [query, setQuery] = useState(" ");
  // const [exercises, setExercises] = useState([]);

  // const url = `http://localhost:3001/exercises`
  
  // useEffect(() => {
  //   getExercises(searchValue)
  // }, [searchValue])

//  const fetchExercises = async () => {
//     const res = await axios.get(`http://localhost:3001/search?q=${query}`);
//     setExercises(res.exercises);
//   };

// useEffect(() => {
//   // getExercises()
//   fetchExercises()
//   // if (query.length === 0 || query.length > 2) fetchExercises();
// }, [query]);


//   const getExercises =  (searchString) => {
//     const url = `http://localhost:3001/exercises`
//     // const url = `http://localhost:3001/exercises/?s=${searchString}`
//      fetch(url)
//      .then(response => response.json())
//      .then(response => setExercises(response))
//      .catch(err => console.error(err));
//  }
//   const getExercises = async (searchString) => {
//     try {
//       const response = await axios.get('http://localhost:3000/exercises-name', {
//           params: {name: 'clamshells'}
//       })
//       setExercises(response.data)
//     } catch (error) {
//         console.log(error)
//     }
//  }

//  const getExercises = async (searchValue) => {
//     const url = `http://localhost:3001/exercises/?s=${searchValue}`
//     const response = await fetch(url);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setExercises(responseJson.Search);
// 		}
// 	};


  // console.log(exercises)
  // console.log(exercises)

  // const handleChange = (event) => {
  //   setSearchString(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   getExercises(searchString);
  // }
  

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

    // const url = `http://localhost:3001/exercises/?s=${searchString}`
    // <Searchbar searchValue={setSearchValue} setSearchValue={setSearchValue} handleChange={handleChange} handleSubmit={handleSubmit} />