import Google from "../images/google.png";

const Login = () => {
  
  const google = () => {
    // window.open("http://localhost:3001/auth/google", "_self");
    window.open("https://move-it-backend-hep.herokuapp.com/auth/google", "_self");
  };


  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right"> Comming Soon
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;