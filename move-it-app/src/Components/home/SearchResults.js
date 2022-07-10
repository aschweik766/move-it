import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResults = ({ exercises }) => {

  let { id } = useParams()
  const ex = exercises[id]
  console.log(id)

  return (
    <div className='card'>
        <h1>{ex.name}</h1>
        <h3>{ex.id}</h3>
        <h3>{ex.url}</h3>
    </div>
  )
}

export default SearchResults