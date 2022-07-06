import React from 'react'

const Searchbar = ({handleSubmit, handleChange, searchString}) => {

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
        placeholder='Search Exercises...'
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
        />
        <button type="submit">Search</button>
      </form>
        
    </div>
  )
}

export default Searchbar