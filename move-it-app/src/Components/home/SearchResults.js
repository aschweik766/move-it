import React from 'react'

const SearchResults = ({ exercises }) => {

  if (!exercises.length) {
    return <h3> No exercises found. </h3>
  }

  return (
    <div className='gallery'>SearchResults
      {exercises.map(ex => (
        <div key={ex.id} className='ex-card'>
          <h2>{ex.name}</h2>
        </div>
      )) }
  
    </div>
  )
}

export default SearchResults