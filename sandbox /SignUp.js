import { Link } from 'react-router-dom';

const SignUp = () => {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    return (
        <div className="container">
            <h1 className="heading">Sign up Form</h1>
            <div className="form-container">
                <div className="left">
                    <img className="image" src="./images/signup.jpg" alt="signup" />
                </div>
                <div className="right">
                    <h2 className="form-heading">Create Account</h2>
                    <input type="text" className="input" placeholder="Username" />
                    <input type="text" className="input" placeholder="Email" />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <button className="btn">Sign Up</button>
                    <p className="text">or</p>
                    <button className="google-btn" onClick={googleAuth}>
                        <img src="./images/google.png" alt="google icon" />
                        <span>Sign up with Google</span>
                    </button>
                    <p className="text">
                        Already Have Account ? <Link to="/login">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp