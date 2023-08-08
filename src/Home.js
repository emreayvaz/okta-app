import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  if (!authState) {
    return <div>Loading ...</div>;
  }

  const handleLogin = async () => navigate('/login');

  const handleLogout = async () => oktaAuth.signOut();

  return (
    <div id="home">
        <Link to="/">Home</Link> | &nbsp;
        <Link id="protected" to="/protected">Protected</Link> | &nbsp;
        {
          authState.isAuthenticated
            ? <button id="logout-button" type="button" onClick={handleLogout}>Logout</button>
            : <button id="login-button" type="button" onClick={handleLogin}>Login</button>
        }
    </div>
  );
};

export default Home;
