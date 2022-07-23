import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Favbtn from '../Components/Favbtn'

const SearchResults = (props) => {
const FavComponent = props.favComponent

  // console.log(props)
  let { id } = useParams()
  const ex = props.searchResults[id]
 
  console.log(ex)
  

  return (
    <div>
    <div className='card' style={{width: "500px", height: "600px"}}>
        <h1 style={{fontSize: '25px'}}>{ex.name}</h1>
        <p className='desc'>{ex.description}</p>
        <p className='desc' style={{lineHeight: '2px'}}>{ex.muscleGroup}</p>
        <p className='desc' style={{lineHeight: '2px'}}>{ex.position}</p>
        <p className='desc' style={{lineHeight: '2px'}}>{ex.equipment}</p>
        <iframe class='card-img-top' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='320' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
        <button className='cardButton favorite-card' style={{marginTop: '7px'}} 
          onClick={() => props.handleFavClick(props.searchResults[id])} >Favorite</button>
      <div ><FavComponent/></div>
    </div>
    </div>
  )
}

export default SearchResults