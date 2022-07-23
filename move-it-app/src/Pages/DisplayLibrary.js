import React from 'react'
import Favbtn from '../Components/Favbtn'
import { Link } from 'react-router-dom'
import RemoveFavorites from '../Components/RemoveFavorites'
import EditCardPage from './EditCardPage'
import AddNewCard from './AddNewCard'

const DisplayLibrary = (props) => {
    // console.log(props)
    const RemoveFavsComponent = props.removeFavComponent 
    const FavComponent = props.favComponent 
    const displayFavorites = () => {
        return props.searchResults?.map((ex, idx) => (
            <div key={idx} className='row d-inline-flex align items center '>
                <div  className="card" style={{width: '30rem', height: '40rem'}}>
                   <div className='card-body'>
                      
                        <h1 className='card-title' style={{fontSize: '28px'}} >{ex.name}</h1> 
                        <div>
                            <p className='desc'>{ex.description}</p>
                            <p className='desc' style={{lineHeight: '1px'}}>{ex.position}</p>
                            <p className='desc' style={{lineHeight: '1px'}}>{ex.muscleGroup}</p>
                            <p className='desc' style={{lineHeight: '1px'}}>{ex.equipment}</p>
                        </div>
                        <iframe class='card-img' src={ex.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                        <div className='align-bottom'>
                        <Link className='link' to={`/library/${idx}`}>
                            <button className='cardButton' style={{maxHeight: '75px', fontSize: '22px'}}>expand</button>
                        </Link>
                        <div>
                        </div>
                        <div className='container'>
                            <div className=' align-center'>
                                <FavComponent/>
                            </div>
                            <div className=' alignt-center' onClick={() => props.handleUnFavClick(ex)}>
                                <RemoveFavsComponent/>
                            </div> 
                        </div>
                    </div>
                    </div>
                 </div>
            </div>  
            ))}
            
            
      
        const loading = () => {
            return <h1>Loading......</h1>
        }
        
    return (
     
        
        <div className='gallery'>
            <div >
                
                    {props.searchResults ? displayFavorites() : loading()}
                <div className='card'><AddNewCard/></div>
            </div>
        </div>
    
    );
}


export default DisplayLibrary

// const FavComponent = props.favComponent 
// const displayFavorites = () => {
//     return props.favorites.map((ex, idx) => (
//         ex.map((data, index)=> (

//         <div className='row d-inline-flex align items center '>
//             <div key={index} className="card" style={{width: '30rem', height: '25rem'}}>
//                <div className='card-body'>
                
//                     <h1 className='card-title' style={{fontSize: '28px'}} >{data.name}</h1> 
                    
//                     <iframe class='card-img' src={data.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
//                     <div className='align-bottom'>
//                     <Link className='link' to={`/library/${index}`}>
//                         <button className='cardButton' style={{maxHeight: '75px', fontSize: '22px'}}>expand</button>
//                     </Link>
//                 </div>
//                 <div onClick={() => props.exercises.handleFavClick(data)}>
//                     <FavComponent/>
//                 </div>
//                 </div>
//              </div>
//         </div>  
//         ))
        
//         ))}