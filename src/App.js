import Navbar from "./Components/Navbar";
import  { Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import axios from "axios";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import SearchResults from "./Pages/SearchResults";
import ExercisesDisplay from './Pages/ExercisesDisplay';
import SearchByNameList from "./Pages/SearchByNameList";
import Favbtn from './Components/Favbtn';
import RemoveFavorites from './Components/RemoveFavorites';
import DisplayLibrary from './Pages/DisplayLibrary';
// import EditCardPage from './Pages/EditCardPage';
import EditExCardForm from './Components/library/EditExCardForm';
// import AddNewCard from './Pages/AddNewCard';
import jwtDecode from "jwt-decode";
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import Cards from './Pages/Cards';
import "react-toastify/dist/ReactToastify.css";
import LoginNew from "./Components/LoginNew.js";
import Signup from "./Components/SignUp.js";
import Nav from "./Components/Nav";

// axios.defaults.baseURL = "/api";


function App() {

  const [exercises, setExercises] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  // function handleCallBack(response) {
  //   console.log("Encoded JWT ID token: " + response.credential)
  //   let userObject = jwtDecode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById('loginDiv').hidden = true;
  // };

  // function handleSignOut(event) {
  //   setUser({});
  //   console.log(event);
  //   document.getElementById('loginDiv').hidden = false;

  // }
  // const CLIENT_ID = process.env.CLIENT_ID;

    const getEx = () => {
      const url= `http://localhost:3001/ex/exercises/`
      // const url= `https://move-it-backend-hep.herokuapp.com/ex/exercises/`
      fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then(res => res.json())
      .then(res => {
        setExercises(res)
        
      })
      .catch(console.error)
    }

    const searchHandler = (query) => {
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
      getEx(exercises);
              /* global google */
      // google.accounts.id.initialize({
      //   client_id: "753718326428-8fg7551745gknkvhpdltpuvushbitf61.apps.googleusercontent.com",
      //   // client_id: CLIENT_ID,
      //   callback: handleCallBack
      // });
      // google.accounts.id.renderButton(
      //   document.getElementById('loginDiv'),
      //   {theme: "outline", size: "large"}
      // ); 
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

    <div className="container-fluid nav">
      <Nav/>
          <Routes>
            <Route path="/account/login" element={<LoginNew/>}/>
            <Route path="/account/signup" element={<Signup/>}/>
          </Routes>
    </div>
    // <div className='container-fluid moveit-app'>
    //   <Navbar user={user} handleSignOut={handleSignOut}/>

    //     <div className="login">
    //       <div id="loginDiv"></div>
    //         { Object.keys(user).length !== 0 && 
    //           <button onClick={(e) => handleSignOut(e)}>Log out</button>
    //         }
    //         { user && 
    //         <div>
    //           <img src={user.picture}></img>
    //           <h3>{user.name}</h3>
    //         </div>
    //         }
    //     </div> 
    //   <div className="search-bar">
    //     <SearchByNameList 
    //       exercises={query.length < 1 ? exercises : searchResults} term={query} searchKeyword={searchHandler}
    //     />
    //   </div>

     
    //     <Routes> 



    //       <Route path="/" element={<Home />} />
    //       <Route
    //         path="/login"
    //         element={user ? <Navigate to="/" /> : <Login 
    //         user={user}
    //         handleSignOut={handleSignOut}/>}
    //       />

    //       <Route exact path="/register" element={<Register />} />
    //       <Route exact path="/login" element={<Login />} />
    //       {/* <Route exact path="/" element={<Cards />} /> */}
    //         <Route path="/ex/exercises/" 
    //         element={<ExercisesDisplay 
    //         query={query} exercises={exercises} searchResults={searchResults} term={query} 
    //         searchKeyword={searchHandler} handleFavClick={addFavExCard} 
    //         favComponent={Favbtn} favorites={favorites}/>}
    //       /> 
    //         <Route path="/exercises/:id" 
    //         element={<SearchResults 
    //         searchResults={searchResults} favorites={favorites} handleFavClick={addFavExCard} 
    //         favComponent={Favbtn}  />}
    //       /> 
    //        <Route path="/library" 
    //         element={<DisplayLibrary 
    //         searchResults={favorites} handleFavClick={addFavExCard} 
    //         handleUnFavClick={removeExCardFav}
    //         favComponent={Favbtn} 
    //         removeFavComponent={RemoveFavorites} />}
    //       /> 
    //        <Route path="/library/:id" 
    //         element={<SearchResults 
    //         searchResults={favorites} handleUnFavClick={removeExCardFav} 
    //         favComponent={Favbtn}  />}
    //       /> 
    //        <Route path="/exercise/editcard" 
    //         element={<EditExCardForm 
    //         searchResults={favorites} handleUnFavClick={removeExCardFav} 
    //         favComponent={Favbtn}  />}
    //       /> 
    //     </Routes>
            
    // </div>
  );
}
export default App;


