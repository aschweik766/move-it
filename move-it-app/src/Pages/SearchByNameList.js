import { UseState, useEffect, useRef} from 'react';
import Searchbar from '../Components/home/Searchbar'
// import LastSearched from '../Components/home/LastSearched';
import FilterSearch from '../Components/home/FilterSearch';
import axios from 'axios';
import SearchResults from '../Components/home/SearchResults';


const SearchByNameList = (props) => {

    // console.log(props);
    const inputElement = useRef("");
    const getSearchTerm = () => {
        // console.log(inputElement.current.value)
        props.searchKeyword(inputElement.current.value)
    };

    return (
        <div>
                <h1>Search Results:</h1>
            <div className='search-bar'>
                <div className='col col-sm-4 gallery'>
                    <input
                    ref={inputElement}
                    type="text"
                    value={props.term}
                    className="search form-control"
                    placeholder="Search..."
                    onChange={getSearchTerm}
                    />
                </div>
               
            </div>
        </div>
    );

};

export default SearchByNameList

// const [exercise, setExercise] = useState("")
// //     const [query, setQuery] = useState("");


//   const getEx = () => {
//     // const url= `http://localhost:3001/exercises-name/${query}`
//     const url= `http://localhost:3001/exercises`

//     fetch(url)
//     .then(res => res.json())
//     .then(res => {
//       setExercise(res.results)
//     })
//     .catch(console.error)
//   }

//   useEffect(() => {
//     getEx();
//   }, [])

// // console.log(exercise)
// if (!exercise) {
//     return <h4>Loading...</h4>
//   }

//   return ( 
//     <div>
//         <Searchbar query={query} setQuery={setQuery}/>
//         <div className='gallery card' style={{width: "18rem"}}>
//             {exercise.filter((item) => {
//                 if (query === "") {
//                     return item;
//                 } else if(item.name.toLowerCase().includes(query.toLowerCase())) {
//                     return item;
//                 }
//             })
//             .map(selectedEx => {
//                 <div>
//                     <div key={selectedEx.id} className='card'>
//                         <Link to={`/exercises/${selectedEx.name}`}>
//                             <div>
//                                 <h1 className='card-title'>{selectedEx.name}</h1> 
//                             </div>
//                         </Link>
//                         <h5 class='card-text'>{selectedEx.description}</h5>
//                         <iframe class='card-img-top' src={selectedEx.url} alt='exercise video' title='YouTube video  player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
//                     </div>   
//                 </div>
//             })
//             }
//         </div>
//     </div>
//   )


// };


// const url = `http://localhost:3001/search/?q=${query}`

// useEffect(() => {
//     const fetchData = () => {
//         fetch(url)
//         .then(res => res.json())
//         .then(res => {
//         setExercises(res.exercises)
//         })
//         .catch(console.error)
//     }
//     // const fetchData = async () => {
//     // const res = await axios.get(`http://localhost:3001/search/?q=${query}`);
//     // setExercises(res);
//     // };
//     // {exercises ? fetchData() : loading()}
//     if (query.length === 0 || query.length > 1) fetchData();
// }, [query]);

// return (
// <div>
//     <h1>Type to Search Exercises by Name</h1>
//     <Searchbar />
//     {/* <LastSearched /> */}
//     <FilterSearch />
//     <table>
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Video</th>
//             <th>Description</th>
//           </tr>
//           {exercises.map((item) => (
//             <tr key={item.name}>
//               <td>{item.name}</td>
//               <td>{item.video}</td>
//               <td>{item.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
// </div>
// )
// }