import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

const Navbar = ({ user }) => {

  // const { setAuthenticated, setUser } = useContext(UserContext)

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
    // setAuthenticated(false)
    // setUser(null)
  };

  return (
    <div className='navbar'>
        <div> 
          <span className="logo">
            <Link className="link" to="/">
              Move-it HEP
            </Link>
          </span>
          {user ? (
          <ul className="list">
            <li className="listItem">
              <img
                src={user.photos[0].value}
                alt=""
                className="avatar"
              />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>
              Logout
            </li>
          </ul>
          ) : (
            <Link className="link" to="login">
              Login
            </Link>
          )}
          <Link to="/homepage"><button className='nav-buttons'>Main</button></Link>
          <Link to="/about"><button className='nav-buttons'>About</button></Link>
          <Link to="/library"><button className='nav-buttons'>Library</button></Link>
          <Link to="/account"><button className='nav-buttons'>Account</button></Link>
          <Link to="/exercises/"><button className='nav-buttons'>Exercises Display</button></Link>
        </div>
    </div>
  )
}

export default Navbar