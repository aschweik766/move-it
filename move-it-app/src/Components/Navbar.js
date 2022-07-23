import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import SearchByNameList from '../Pages/SearchByNameList';

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
          <span className="logo" style={{padding: '20px', fontSize: '65px'}}>
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
            <li className="listItem"onClick={logout}>
              Logout
            </li>
          </ul>
          ) : (
            <Link className="link" style={{margin: '10px'}} to="login">
              Login
            </Link>
          )}
        
          <div className='align-right'>
          <Link to="/"><button className='cardButton nav-buttons'>Home</button></Link>
          <Link to="/about"><button className='cardButton nav-buttons'>About</button></Link>
          <Link to="/library"><button className='cardButton nav-buttons'>Library</button></Link>
          <Link to="/account"><button className='cardButton nav-buttons'>Account</button></Link>
          <Link to="/ex/exercises/"><button className='cardButton nav-buttons'>Exercises Display</button></Link>
       </div>
       
       </div>
    </div>
  )
}

export default Navbar