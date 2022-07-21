import { Link } from "react-router-dom";

const Login = () => {
    const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className="container">
			<h1 className="title">Welcome to Move It HEP</h1>
			<div className="form-container">
				<div className="left">
					<img className="img" src="move-it-app/src/images/login.jpeg" alt="login icon" />
				</div>
				<div className="right">
					<h2 className="form-heading">Members Log in with Google </h2>
					<button className="google_btn" onClick={googleAuth}>
						<img className="img" src="move-it-app/src/images/google.png" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
					<p className="text">
						New User ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login