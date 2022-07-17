import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = (props) => {

  // console.log(props)
  let { id } = useParams()
  const ex = props.searchResults[id]
  // console.log(id)

  return (
    <div className='card' style={{width: "500px", height: "650px"}}>
        <h1>{ex.name}</h1>
        <h3>{ex.id}</h3>
        <h5>{ex.description}</h5>
        <h5>{ex.equipment}</h5>
        <h5>{ex.position}</h5>
        <h5>{ex.muscleGroup}</h5>
        <iframe class='card-img-top' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='515' width='440' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
    </div>
  )
}

export default SearchResults