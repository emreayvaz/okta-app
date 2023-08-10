import React from 'react'
import { Outlet, useNavigate  } from 'react-router-dom'
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import logo from './logo.svg';
import config from "./config";
import { getIn } from "formik"
import { extCallback } from './Home';
const oktaAuth = new OktaAuth(config.oidc);

const getValuesFromOktaTokenStorage = () => {
  const oktaTokenStorage = JSON.parse(localStorage.getItem("okta-token-storage"));
  if(oktaTokenStorage){
    let token = getIn(oktaTokenStorage,"accessToken.accessToken");   
    let email = getIn(oktaTokenStorage,"idToken.claims.email");   
    let name = getIn(oktaTokenStorage,"idToken.claims.name");   
    return {token, email, name }  
  }
  return null;
}

function Layout() {
    const navigate = useNavigate();

    const customAuthHandler = () => {
      navigate("/login");
    };

    // const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    //   // await extCallback(authState.accessToken.accessToken, authState.idToken.claims.email, authState.idToken.claims.name)
    //   const inputs = getValuesFromOktaTokenStorage();
    //   if(inputs){
    //     await extCallback(inputs.token, inputs.email, inputs.name).then((resp)=>{
    //       if(resp.data.done){
    //         // navigate(toRelativeUrl(originalUri || "", window.location.origin));
    //         navigate("successfully-login")
    //       }
    //     })
    //   }
    // };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
      // window.location.replace(
      //   toRelativeUrl(originalUri || "", window.location.origin)
      // );
      navigate(toRelativeUrl(originalUri || "", window.location.origin))
    }

  return (
    <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <div className="App">
        <header className="App-header">
            <p>My Okta-React app</p>
            <img src={logo} className="App-logo" alt="logo" />
            <Outlet />
        </header>
        </div>
      </Security>
  )
}

export default Layout