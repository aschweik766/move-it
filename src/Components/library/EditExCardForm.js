import React from 'react'
import { useParams } from 'react-router-dom'
import EditCardPage from '../../Pages/EditCardPage'
import { Link } from 'react-router-dom'
import AddNewCard from '../../Pages/AddNewCard'

const EditExCardForm = (props) => {
  
    const EditExCardForm = props.editCard
      // console.log(props)
      let { id } = useParams()
      const selectedEx = props.searchResults[id]
    
      return (
        <div>
        <div className='card' style={{width: "500px", height: "600px"}}>
            <h1 style={{fontSize: '25px'}}>{selectedEx.name}</h1>
            <p className='desc'>{selectedEx.description}</p>
            <p className='desc' style={{lineHeight: '2px'}}>{selectedEx.muscleGroup}</p>
            <p className='desc' style={{lineHeight: '2px'}}>{selectedEx.position}</p>
            <p className='desc' style={{lineHeight: '2px'}}>{selectedEx.equipment}</p>
            <iframe class='card-img-top' src={selectedEx.url} alt='exercise video' title='YouTube video player' frameBorder='0' height='215' width='320' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
            {/* <button className='cardButton favorite-card' style={{marginTop: '7px'}} 
              onClick={() => props.handleSubmit(props.searchResults[id])} >Favorite</button> */}
            <Link className='link' to={`/exercises/:editcard`}>
                <button className='cardButton' style={{maxHeight: '75px', fontSize: '22px'}}>expand</button>
            </Link>
          <div><AddNewCard/></div>
        </div>
        </div>
      )
    }
    

export default EditExCardForm