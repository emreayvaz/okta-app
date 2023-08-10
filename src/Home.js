import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import axios from "axios";

const extCallback = async (idToken,email,fullname) => {
  return await axios.post("https://localhost:7001/tr/account/okta-login-register",{
    idToken:idToken,
    email:email,
    fullName:fullname
  },
  {
    headers:{
      "Accept" : "application/json",
      "Content-Type" : "application/json",
      "Access-Control-Allow-Origin" : "*",
    }
  })
}

const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  if (!authState) {
    return <div>Loading ...</div>;
  }

  const handleLogin = async () => navigate('/login');

  const handleLogout = async () => oktaAuth.signOut();

  const handleRequest = async () => extCallback(authState.accessToken.accessToken, authState.idToken.claims.email, authState.idToken.claims.name).then((resp)=>console.log(resp.data));

  return (
    <div id="home">
        <Link to="/">Home</Link> | &nbsp;
        <Link id="protected" to="/protected">Protected</Link> | &nbsp;
        {authState.isAuthenticated && <button id="logout-button" type="button" onClick={handleRequest}>İstek At</button> } | &nbsp;
        {
          authState.isAuthenticated
            ? <button id="logout-button" type="button" onClick={handleLogout}>Logout</button>
            : <button id="login-button" type="button" onClick={handleLogin}>Login</button>
        }
    </div>
  );
};

export default Home;
