import React from 'react'

const Searchbar = (props) => {

  return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchString(event.target.value)}
				placeholder='Type to search exercises...'
			></input>
		</div>
	);
};

export default Searchbar

/* <div className='search-bar col col-sm-4'>
<form onSubmit={handleSubmit} className="form-horizontal">
  <input
  placeholder='Type to search exercises...'
  type="text"
  name="searchString"
  required
  onChange={handleChange}
  value={searchString}
  />
  <button type="submit">Search</button>
</form>
  
</div> */