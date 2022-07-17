import React from 'react'

export const Home = (userInfo) => {
  const user = userInfo.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	return (
		<div className="container">
			<h1 className="heading">Home</h1>
			<div className="form-container">
				<div className="left">
					<img className="image" src="./images/profile.jpg" alt="login" />
				</div>
				<div className="right">
					<h2 className="form-heading">Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className="profile-img"
					/>
					<input
						type="text"
						defaultValue={user.name}
						className="input"
						placeholder="username"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className="input"
						placeholder="email"
					/>
					<button className="btn" onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;