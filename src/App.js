import React from "react";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Landing from "./components/Landing";

const App = () => (
  <>
    <Nav />
    <Router>
      <Landing path="/" />
    </Router>
  </>
);

export default App;
