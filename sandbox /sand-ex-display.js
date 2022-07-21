import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchByNameList from './SearchByNameList';


const ExercisesDisplay = () => {
    const [exercises, setExercises] = useState([])
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
      const getEx = () => {
        const url= `http://localhost:3001/exercises/`
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
            console.log(searchResults)
        } else {
            setSearchResults(exercises);
        }
      };
    
      useEffect(() => {
        getEx(exercises);
       
      }, [exercises])

    const displayAllExer = () => {
        return searchResults.map((ex, idx) => (
            <div class="flex-container card" style={{width: "20rem", height: "10rem"}}>
                <div key={idx} className="search-results" >
                   
                        <Link to={`/exercises/${idx}`}>
                            <div>
                                <h1 className='card-title' style={{fontSize: "22px"}}>{ex.name}</h1> 
                            </div>
                        </Link>
                        {/* <h5 class='card-text' style={{fontSize: "10px"}}>{ex.description}</h5> */}
                        <iframe class='card-img-top' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                       
                    
                 </div>
            </div>
            ))}
        
        const loading = () => {
            return <h1>Loading......</h1>
        }
        
    return (
     <div> 
        <SearchByNameList exercises={query.length < 1 ? exercises : searchResults} term={query} searchKeyword={searchHandler}/>
        
        <div className='gallery'>
            <div className='row d-flex align-items-center m-0 '>
                
                    {exercises ? displayAllExer() : loading()}
                
            </div>
        </div>
    </div>
    );
}
 export default ExercisesDisplay

