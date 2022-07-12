import React from 'react'

const Searchbar = (props) => {

  return (
		<div className='col col-sm-4 gallery'>
			<input
				className='form-control search'
				value={props.value}
				onChange={(event) => props.setQuery(event.target.value.toLocaleLowerCase())}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

  

export default Searchbar

// return (
//   <div className='col col-sm-4'>
//     <input
//       className='form-control'
//       value={props.value}
//       onChange={(event) => props.setSearchString(event.target.value)}
//       placeholder='Type to search exercises...'
//     ></input>
//   </div>
// );
// };

// return (
//   <div>
//       <form onSubmit={handleSubmit} className="form-horizontal">
//        <input 
//        placeholder="Search"
//        type="text" 
//        name="searchString" 
//        required 
//        onChange={handleChange}
//        value={searchString}
//         />

     
//       <button type="submit">
//        Submit
//        </button>
//    </form>


//   </div>
//  )
// }