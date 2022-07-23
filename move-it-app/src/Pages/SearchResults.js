import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import Favbtn from '../Components/Favbtn'
import ReactTOPdf from "react-to-pdf";

const ref = React.createRef()

const SearchResults = (props) => {
const FavComponent = props.favComponent
let { id } = useParams()
const ex = props.searchResults[id]

// console.log(ex)



  return (
    <div className="pdf_container"ref={ref}>
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
        <ReactTOPdf targetRef={ref} >
          {({ toPdf }) => 
            <button onClick={toPdf} className="cardButton get_started">
              Print HEP
            </button>
          }
        </ReactTOPdf>
    </div>
  )
}


export default SearchResults;