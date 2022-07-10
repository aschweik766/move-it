import React from 'react'
import { Link } from 'react-router-dom'

const ExercisesDisplay = (props) => {

    

    const displayAllExer = () => {
        return props.exercises.map((ex) => (
            <div key={ex._id} className='gallery card'>
                <Link to={`/exercises/${ex._id}`}>
                    <div>
                        <h1>{ex.name}</h1> 
                    </div>
                </Link>
                <h5>{ex.description}</h5>
                <iframe src={ex.url} alt='exercise video' title='YouTube video player' frameborder='0' height='215' width='340' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
            </div>
            )
         )
    }

    const loading = () => {
        return <h1>Loading......</h1>
    }

  return (
    <section>
        {props.exercises ? displayAllExer() : loading()}
    </section>
  );
}
  

export default ExercisesDisplay