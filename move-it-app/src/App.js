import './App.css';
// import Header from "./Components/Header";----using just navbar instead for now
import Navbar from "./Components/Navbar";
import  { Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
// import SignIn from "./authenticate/SignIn/index"
// import SignUp from "./authenticate/SignUp/index"
import SearchResults from "./Pages/SearchResults";
import ExercisesDisplay from './Pages/ExercisesDisplay';
import SearchByNameList from "./Pages/SearchByNameList";
import AddFavToLib from './Components/library/AddFavToLib';
import FilterSearch from "./Components/home/FilterSearch";
import Favbtn from './Components/Favbtn';
import RemoveFavorites from './Components/RemoveFavorites';
import DisplayLibrary from './Pages/DisplayLibrary';
import EditCardPage from './Pages/EditCardPage';
import EditExCardForm from './Components/library/EditExCardForm';
import AddNewCard from './Pages/AddNewCard';


// axios.defaults.baseURL = "/api";
//react to print npm module install//

function App() {
  // const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  // const [reRender, setRender] = useState(0)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

    
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

// saving favorites //
      useEffect(() => {
        const favCard = JSON.parse(localStorage.getItem('ex-card-favorite'));
        if (favCard) {
          setFavorites(favCard)
        }
    }, []);
    
    
    const saveToLocalStorage = (items) => {
      localStorage.setItem('ex-card-favorite', JSON.stringify(items));
    }
    
    const addFavExCard = (exercise) => {
      const newFavList = [...favorites, exercise];
      setFavorites(newFavList);
      saveToLocalStorage(newFavList);
    };
    
    const removeExCardFav = (exercise) => {
      const newFavList = favorites.filter((favorite) => favorite.id !== exercise.id);
      setFavorites(newFavList);
      saveToLocalStorage(newFavList);
    }

 
  return (

    <div className='container-fluid moveit-app'>
      {/* <UserContext.Provider value={{
            authenticated, setAuthenticated,
            user, setUser,
            exercises, setExercises,
            cardFavorites, setFavorites,
            searchResults, setSearchResults,
            reRender, setReRender
        }}>
            <AuthenticatePage />
        </UserContext.Provider> */}
      <Navbar user={user}/>
      <div className="search-bar">
        <SearchByNameList 
          exercises={query.length < 1 ? exercises : searchResults} term={query} searchKeyword={searchHandler}
        />
      </div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
            <Route path="/home" 
            element={<Home/>}
          />
            {/* <Route path="/signin" 
            element={<SignIn/>}
          />
            <Route path="/signup" 
            element={<SignUp/>}
          /> */}
            <Route path="/ex/exercises/" 
            element={<ExercisesDisplay 
            query={query} exercises={exercises} searchResults={searchResults} term={query} 
            searchKeyword={searchHandler} handleFavClick={addFavExCard} 
            favComponent={Favbtn} favorites={favorites}/>}
          /> 
            <Route path="/exercises/:id" 
            element={<SearchResults 
            searchResults={searchResults} favorites={favorites} handleFavClick={addFavExCard} 
            favComponent={Favbtn}  />}
          /> 
           <Route path="/library" 
            element={<DisplayLibrary 
            searchResults={favorites} handleFavClick={addFavExCard} 
            handleUnFavClick={removeExCardFav}
            favComponent={Favbtn} 
            removeFavComponent={RemoveFavorites} />}
          /> 
           <Route path="/library/:id" 
            element={<AddNewCard 
            searchResults={favorites} handleUnFavClick={removeExCardFav} 
            favComponent={Favbtn}  />}
          /> 
           <Route path="/exercise/:editcard" 
            element={<EditExCardForm 
            searchResults={favorites} handleUnFavClick={removeExCardFav} 
            favComponent={Favbtn}  />}
          /> 
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


//parent vs child --
  // --useContext [database token cookies]
  // --best 