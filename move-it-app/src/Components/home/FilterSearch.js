import React from 'react'

const FilterSearch = () => {
  return (
    <div className='filter-search col-2'>
      <h5>Filter search by categories</h5>

        <button className='filter-btn col-8'>Joint</button>
        <br></br>
        <button className='filter-btn  col-8'>Muscle </button>
        <br></br>
        <button className='filter-btn  col-8'>Equipment</button>
        <br></br>
        <button className='filter-btn  col-8'>Position</button>
        <br></br>
    </div>
  )
  }

export default FilterSearch