// import React, { useContext, useEffect, useState } from 'react';
// import UserContext from '../../UserContext';
// import axios from 'axios';

// const AddFavToLib = () => {

//   const { user, exercise, searchResults, reRender, setRender } = useContext(UserContext);
//   const [library, setLibrary] = useState('not-liked');
//   const [currentLib, setCurrentLib] = useState(null);


//   const handleChange = (element) => {setLibrary(element.target.value)};
//   const handleSubmit = (element) => {
//     element.preventDefault()
//     let addCardToLib = "localhost://3001/user/updateLibrary";

//     axios.put((addCardToLib, {lib: lib, userId: user._id, exerciseId: exercise._id}))
//     .then(() => setRender(reRender + 1))
//     .catch(console.error);
//   };

//   useEffect(() => {
//     let currentExercise = exercise['_id']
//     switch (expression) {
//       case 1: user.notfavd.includes(exercise['_id'])
//         return setCurrentLib('notfavd')
//       case 2: user.favd.some(card => card['_id'] === exercise['_id'])
//         return setCurrentLib('favd')

//     }

//   }, [exercise])

//   return (
//     <div className='favorite-exercises'>
//        <form onSubmit={(event) => handleSubmit(event)} className="form">
//         <select className='libraryOptions' name='exerciseFavLibrary' onChange={(e) => handleChange(e)}>
//           <option value='notfavd' selected={currentLib === 'notfavd' ? true : false}>Not Favorited Yet</option>
//           <option value='favd' selected={currentLib === 'favd' ? true : false}>Favorited</option>
//         </select>
//         <input type="submit" value="Update" />
//        </form>
//     </div>
//   )
// }

// export default AddFavToLib