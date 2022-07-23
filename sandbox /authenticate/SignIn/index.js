import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const  SignIn = ()  => {

  // const clientId = process.env.CLIENT_ID;
  
  const googleAuth = async ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signin",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
        first_name: profileObj.givenName,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId={process.env.CLIENT_ID}
      onSuccess={googleAuth}
      onFailure={(error) => console.log(error)}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default SignIn;
