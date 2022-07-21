// import React from 'react'

// const Login = () => {
//     const googleAuth = () => {
// 		window.open(
// 			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
// 			"_self"
// 		);
// 	};
// 	return (
// 		<div className="container">
// 			<h1 className="heading">Log in Form</h1>
// 			<div className="form-container">
// 				<div className="left">
// 					<img className="login-image" src="./images/login.jpg" alt="login" />
// 				</div>
// 				<div className="right">
// 					<h2 className="form-heading">Members Log in</h2>
// 					<input type="text" className="input" placeholder="Email" />
// 					<input type="text" className="input" placeholder="Password" />
// 					<button className="btn">Log In</button>
// 					<p className="tesx">or</p>
// 					<button className="google_btn" onClick={googleAuth}>
// 						<img src="./images/google.png" alt="google icon" />
// 						<span>Sign in with Google</span>
// 					</button>
// 					<p className="text">
// 						New User ? <Link to="/signup">Sing Up</Link>
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Login