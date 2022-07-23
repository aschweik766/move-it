import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchByNameList from './SearchByNameList';
import SearchResults from './SearchResults';


const ExercisesDisplay = (props) => {

    // const FavComponent = props.favComponent

    const displayAllExer = () => {
        return props.searchResults.map((ex, idx) => (
            <div className='row d-inline-flex align items center '>
                <div key={idx} className="card" style={{width: '30rem', height: '25rem'}}>
                   <div className='card-body'>
                        <h1 className='card-title' style={{fontSize: '28px'}} >{ex.name}</h1> 
                         
                        <iframe class='card-img' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                        <div className='align-bottom'>
                        <Link className='link' to={`/exercises/${idx}`}>
                            <button className='cardButton' style={{maxHeight: '75px', fontSize: '22px'}}>expand</button>
                        </Link>
                    </div>
                    {/* <div onClick={() => props.exercises.handleFavClick(ex)}>
                        <FavComponent/>
                    </div> */}
                    </div>
                 </div>
            </div>
            )) 
       
        }
        
        const loading = () => {
            return <h1>Loading......</h1>
        }
        
    return (
     
        
        <div className='gallery'>
            <div >
                
                    {props.exercises ? displayAllExer() : loading()}
                
            </div>
        </div>
    
    );
}
 export default ExercisesDisplay

