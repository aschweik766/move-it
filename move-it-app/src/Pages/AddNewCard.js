import React from 'react'

const AddNewCard = () => {

  return (
    <div >
      <h1>Create Card</h1>
      <form style={{input: '10px'}}>
        <div >
          <input type="text" name="Name" placeholder='Name...' />
        </div>
        <div>
          <input className='input' type="text" name="Video" placeholder='Paste Video Link...' />
        </div>
        <div>
          <input className='input' type="text" name="Image" placeholder='Paste Image Link...'/>
        </div>
        <div>
          <input className='input'  type="text" name="Equipment" placeholder='Equipment...'/>
        </div>
        <div>
          <input className='input' type="text" name="MuscleGroup" placeholder='Muscle Groups...'/>
        </div>
        <div>
          <input className='input' type="text" name="position" placeholder='Position...'/>
        </div>
        <div>
        <input className='input' type="text" name="Description" placeholder='Description...' />
        </div>
        <button className='submit' type="submit">Create</button>
      </form>
    </div>
  )
}

export default AddNewCard