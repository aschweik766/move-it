import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const SignUp = () => {

  // const clientId = process.env.CLIENT_ID;

  const googleAuth = ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signup",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
        first_name: profileObj.givenName,
        last_name: profileObj.familyName,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="753718326428-5ivqkvr7mg0knmr73ml5vh286sj7hmaj.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={(error) => console.log(error)}
      cookiePolicy={"single_host_origin"}
    >
      <span>Sign Up with Google</span>
    </GoogleLogin>
  );
}

export default SignUp;
