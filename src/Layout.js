import React from 'react'
import { Outlet, useNavigate  } from 'react-router-dom'
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import logo from './logo.svg';
import config from "./config";
import { getIn } from "formik"

const oktaAuth = new OktaAuth(config.oidc);

function Layout() {
    const navigate = useNavigate();

    const customAuthHandler = () => {
      navigate("/login");
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
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