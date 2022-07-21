// import React, { useState , useEffect } from 'react'
// import { Link } from 'react-router-dom'
// // import Searchbar from '../Components/home/Searchbar';
// import SearchByNameList from './SearchByNameList';

// const ExercisesDisplay = () => {
//     const [exercises, setExercises] = useState([])
//     const [query, setQuery] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     // const [list, setList] = useState([]);
    
//       const getEx = () => {
//         const url= `http://localhost:3001/exercises/`
//         fetch(url)
//         .then(res => res.json())
//         .then(res => {
//           setExercises(res)
//         //   console.log(res)
//         })
//         .catch(console.error)
//       }


//       const searchHandler = (query) => {
//         // console.log(query)
//         // console.log(exercises)
//         setQuery(query);
//         if (query !== ""){
//             const newExerciseList = exercises.filter((exercise) => {
//                 return exercise.name.includes(query)
//             })
//             setSearchResults(newExerciseList);
//             console.log(searchResults)

//             const renderSearchResults = newExerciseList.map(exercise => {
//                 return Object.values(exercise)
//             })
//                 setSearchResults(renderSearchResults)
//                 console.log(renderSearchResults)
//         } else {
//             setSearchResults(exercises);
//         }
//       };

//     //   const renderResults = () => {
//     //     searchResults.map((exercise) => {
//     //     return exercise.name
//     //     console.log('this is the result rendered: ' + exercise)
//     //  })}


    
//       useEffect(() => {
         
            
//         getEx(exercises);
//         // renderResults(searchResults)
//       }, [exercises])

// // console.log(exercises)
//     const displayAllExer = () => {
//             return exercises.map((ex) => (
//                 <div key={ex._id} className='gallery card' style={{width: "18rem"}}>
//                     <Link to={`/exercises/${ex._id}`}>
//                         <div>
//                             <h1 className='card-title'>{ex.name}</h1> 
//                         </div>
//                     </Link>
//                     <h5 class='card-text'>{ex.description}</h5>
//                     <iframe class='card-img-top' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
//                 </div>
//                 ))}
        
//         const loading = () => {
//             return <h1>Loading......</h1>
//         }
        
//     return (
//      <div> 
//      <SearchByNameList exercises={query.length < 1 ? exercises : searchResults} term={query} searchKeyword={searchHandler}/>
//     <section>
//         {exercises ? displayAllExer() : loading()}
//     </section>
//     </div>
//     );
// }
//  export default ExercisesDisplay

// //     const [exercise, setExercise] = useState("")
// //     const [query, setQuery] = useState("");


// //   const getEx = () => {
// //     // const url= `http://localhost:3001/exercises-name/${query}`
// //     const url= `http://localhost:3001/exercises`

// //     fetch(url)
// //     .then(res => res.json())
// //     .then(res => {
// //       setExercise(res.results)
// //     })
// //     .catch(console.error)
// //   }

// //   useEffect(() => {
// //     getEx();
// //   }, [])

// // // console.log(exercise)
// // if (!exercise) {
// //     return <h4>Loading...</h4>
// //   }

// //   return ( 
// //     <div>
// //         <Searchbar query={query} setQuery={setQuery}/>
// //         <div className='gallery card' style={{width: "18rem"}}>
// //             {exercise.filter((item) => {
// //                 if (query === "") {
// //                     return item;
// //                 } else if(item.name.toLowerCase().includes(query.toLowerCase())) {
// //                     return item;
// //                 }
// //             })
// //             .map(selectedEx => {
// //                 <div>
// //                     <div key={selectedEx.id} className='card'>
// //                         <Link to={`/exercises/${selectedEx.name}`}>
// //                             <div>
// //                                 <h1 className='card-title'>{selectedEx.name}</h1> 
// //                             </div>
// //                         </Link>
// //                         <h5 class='card-text'>{selectedEx.description}</h5>
// //                         <iframe class='card-img-top' src={selectedEx.url} alt='exercise video' title='YouTube video  player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
// //                     </div>   
// //                 </div>
// //             })
// //             }
// //         </div>
// //     </div>
// //   )


// // };



// // 


// // const displayAllExer = () => {
// //     return props.exercises.map((ex) => (
// //         <div key={ex._id} className='gallery card' style={{width: "18rem"}}>
// //             <Link to={`/exercises/${ex._id}`}>
// //                 <div>
// //                     <h1 className='card-title'>{ex.name}</h1> 
// //                 </div>
// //             </Link>
// //             <h5 class='card-text'>{ex.description}</h5>
// //             <iframe class='card-img-top' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
// //         </div>
// //         )
// //      )
// // }

// // const loading = () => {
// //     return <h1>Loading......</h1>
// // }

// // return (
// // <section>
// //     {props.exercises ? displayAllExer() : loading()}
// // </section>
// // );
// // }



// //     const [exercise, setExercise] = useState("")
// //     const [query, setQuery] = useState("");


// //   const getEx = () => {
// //     // const url= `http://localhost:3001/exercises-name/${query}`
// //     const url= `http://localhost:3001/exercises`

// //     fetch(url)
// //     .then(res => res.json())
// //     .then(res => {
// //       setExercise(res.results)
// //     })
// //     .catch(console.error)
// //   }

// //   useEffect(() => {
// //     getEx();
// //   }, [])

// // // console.log(exercise)
// // if (!exercise) {
// //     return <h4>Loading...</h4>
// //   }

// //   return ( 
// //     <div>
// //         <Searchbar query={query} setQuery={setQuery}/>
// //         <div className='gallery card' style={{width: "18rem"}}>
// //             {exercise.filter((item) => {
// //                 if (query === "") {
// //                     return item;
// //                 } else if(item.name.toLowerCase().includes(query.toLowerCase())) {
// //                     return item;
// //                 }
// //             })
// //             .map(selectedEx => {
// //                 <div>
// //                     <div key={selectedEx.id} className='card'>
// //                         <Link to={`/exercises/${selectedEx.name}`}>
// //                             <div>
// //                                 <h1 className='card-title'>{selectedEx.name}</h1> 
// //                             </div>
// //                         </Link>
// //                         <h5 class='card-text'>{selectedEx.description}</h5>
// //                         <iframe class='card-img-top' src={selectedEx.url} alt='exercise video' title='YouTube video  player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
// //                     </div>   
// //                 </div>
// //             })
// //             }
// //         </div>
// //     </div>
// //   )


// // };



// // 


// // const displayAllExer = () => {
// //     return props.exercises.map((ex) => (
// //         <div key={ex._id} className='gallery card' style={{width: "18rem"}}>
// //             <Link to={`/exercises/${ex._id}`}>
// //                 <div>
// //                     <h1 className='card-title'>{ex.name}</h1> 
// //                 </div>
// //             </Link>
// //             <h5 class='card-text'>{ex.description}</h5>
// //             <iframe class='card-img-top' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
// //         </div>
// //         )
// //      )
// // }

// // const loading = () => {
// //     return <h1>Loading......</h1>
// // }

// // return (
// // <section>
// //     {props.exercises ? displayAllExer() : loading()}
// // </section>
// // );
// // }