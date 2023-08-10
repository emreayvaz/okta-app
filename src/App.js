import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import Home from "./Home";
import Login from "./Login";
import "./App.css";
import Layout from "./Layout";


const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
        </Route>
      </Routes>
  );
};

export default App;
