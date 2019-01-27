import React, { useContext } from "react";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Repo from "./components/Repo";

//context
import { Provider } from "./state/context";
const [{ currentRepo }, dispatch] = useContext(RepoContext);

const App = () => (
  <Provider value={{ currentRepo, dispatch }}>
    <Nav />
    <Router>
      <Landing path="/" />
      <Repo path="/:repoID" />
    </Router>
  </Provider>
);

export default App;
