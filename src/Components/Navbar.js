import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = ({ user, handleSignOut }) => {

  return (
    <div className='navbar'>
        <div> 
          <span className="logo" style={{padding: '20px', fontSize: '65px'}}>
            <Link className="link" to="/">
              Move-it HEP
            </Link>
          </span>
          {user ? (
          <ul className="list">
            <li className="listItem">
              <img
                src={user.picture}
                alt="avatar"
                className="avatar"
              />
            </li>
            <li className="listItem">{user.name}</li>
            <li className="listItem" onClick={(e) => handleSignOut(e)}>Log Out</li>
          </ul>
          ) : (
            <Link className="link" style={{margin: '10px'}} to="login">
              Login
            </Link>
          )}
    
          <div className='align-right'style={{padding:'10px'}}>
          <Link to="/"><button className='cardButton nav-buttons'>Home</button></Link>
          <Link to="/library"><button className='cardButton nav-buttons'>Library</button></Link>
          <Link to="/ex/exercises/"><button className='cardButton nav-buttons'>Exercises Display</button></Link>
       </div>
       
       </div>
    </div>
  )
}

export default Navbar

/* <div className="login">
              <div id="loginDiv"></div>
                { Object.keys(user).length !== 0 && 
                  <button onClick={(e) => handleSignOut(e)}>Log out</button>
                }
                { user && 
                <div>
                  <img src={user.picture}></img>
                  <h3>{user.name}</h3>
                </div>
                }
            </div> */