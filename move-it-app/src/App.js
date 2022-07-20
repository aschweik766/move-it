import Header from "./Components/Header";
import  { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Home from "./Pages/Home";
import SignIn from "./authenticate/SignIn/index"
import SignUp from "./authenticate/SignUp/index"
import SearchResults from "./Pages/SearchResults";
import ExercisesDisplay from './Pages/ExercisesDisplay';
import SearchByNameList from "./Pages/SearchByNameList";
import FilterSearch from "./Components/home/FilterSearch";


axios.defaults.baseURL = "/api";
//react to print npm module install//

function App() {
  // const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

      // const getUser = async () => {
      //   try {
      //     const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      //     const { data } = await axios.get(url, { withCredentials: true })
      //     setUser(data.user._json);
      //   } catch (err) {
      //     // console.log(err);
      //   }
      // };
    
      const getEx = () => {
        const url= `http://localhost:3001/ex/exercises/`
        fetch(url)
        .then(res => res.json())
        .then(res => {
          setExercises(res)
        //   console.log(res)
        })
        .catch(console.error)
      }

      const searchHandler = (query) => {
        // console.log(query)
        // console.log(exercises)
        setQuery(query);
        if (query !== ""){
            const newExerciseList = exercises.filter((exercise) => {
                return exercise.name.includes(query)
            })
            setSearchResults(newExerciseList);
            // console.log(searchResults)
        } else {
            setSearchResults(exercises);
        }
      };
    
      useEffect(() => {
        // getUser();
        getEx(exercises);
       
      }, [exercises])


 
  return (

    <div className='container-fluid moveit-app'>
      <Header/> 
      <div className="search-bar">
        <SearchByNameList exercises={query.length < 1 ? exercises : searchResults} term={query} searchKeyword={searchHandler}/>
      </div>
          <Routes> 
            <Route path="/home" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/exercises/" element={<ExercisesDisplay query={query} exercises={exercises} searchResults={searchResults} term={query} searchKeyword={searchHandler}/>}/> 
            <Route path="/exercises/:id" element={<SearchResults searchResults={searchResults} exercises={exercises}/>}/> 
          </Routes>
            {/* <div className="row"></div>
            <div className="row"></div>
            <br></br>
            <div className='row'><FilterSearch /></div> */}
            {/* <div className='col'><LastSearched lastSearch={lastSearch}/> </div> */}
    </div>
  );
}
export default App;
