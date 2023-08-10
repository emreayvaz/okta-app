import React from 'react';
import { useNavigate } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { extCallback } from './Home';

const Login = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  const onSuccess = async (tokens) => {
    await extCallback(tokens.idToken.idToken, tokens.idToken.claims.email, tokens.idToken.claims.name ).then((resp)=> {
      if(resp.data.done) navigate("/")
    });
    await oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log('Sign in error:', err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }
  
  return <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>
  
};

export default Login;
