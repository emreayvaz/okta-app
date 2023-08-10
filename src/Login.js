import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { extCallback } from './Home';



const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();
  const onSuccess = async (tokens) => {
    console.log("onSuccess.tokens",tokens)
    await extCallback(tokens.idToken.idToken, tokens.idToken.claims.email, tokens.idToken.claims.name ).then((resp)=> {
      if(resp.data.done) navigate("/")
    });
    await oktaAuth.handleLoginRedirect(tokens);
    // await extCallback(authState.idToken.idToken,authState.idToken.claims.name, authState.idToken.claims.email).then((resp)=>console.log(resp.data))
  };


  const onError = (err) => {
    console.log('Sign in error:', err);
  };

  // useEffect(()=>{
  //   console.log("useEffect")
  //   authState.isAuthenticated && extCallback(authState.accessToken.accessToken, authState.idToken.claims.email, authState.idToken.claims.name)
  // },[authState.isAuthenticated])

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
