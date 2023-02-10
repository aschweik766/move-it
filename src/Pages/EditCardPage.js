import React from "react";

const EditCardPage = () => {

  return (
    <div className="edit-form">
      <h1>Customize Exercise Card</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="Name"  />
          <label>Description</label>
          <input type="text" name="Description" required />
        </div>
        <div>
          <label>Video</label>
          <input type="email" name="Video" required />
        </div>
        <div>
          <label>Image</label>
          <input type="password" name="Image"/>
        </div>
        <div>
          <label>Equipment</label>
          <input type="password" name="Equipment"/>
        </div>
        <div>
          <label>MuscleGroup</label>
          <input type="password" name="MuscleGroup"/>
        </div>
        <div>
          <label>Position</label>
          <input type="password" name="password2"/>
        </div>
        <button className='cardButton' type="submit">Edit</button>
      </form>
    </div>
  )
}

export default EditCardPage;