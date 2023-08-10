import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';



const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();
  const onSuccess = async (tokens) => {
    await oktaAuth.handleLoginRedirect(tokens).then(()=>{
      var token = tokens.idToken.idToken;
      var claims = tokens.idToken.claims;
      // extCallback(token,claims.name, claims.email).then((resp)=>console.log(resp.data));
      // console.log(token)
      // console.log(claims.name)
      // console.log(claims.email)
    });
    // await extCallback(authState.idToken.idToken,authState.idToken.claims.name, authState.idToken.claims.email).then((resp)=>console.log(resp.data))
  };


  const onError = (err) => {
    console.log('Sign in error:', err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }
  
  return (
    // authState.isAuthenticated ?
    //   navigate("/") :
      <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>
  )
};

export default Login;
