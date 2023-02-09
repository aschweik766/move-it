import Google from "../images/google.png";


const Login = ({handleSignOut, user}) => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="login">
          <div id="loginDiv"></div>
            { Object.keys(user).length !== 0 && 
              <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }
            { user && 
            <div>
              <img src={user.picture}></img>
              <h3>{user.name}</h3>
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default Login;