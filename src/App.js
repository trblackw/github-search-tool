import React, { useContext, useReducer } from "react";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Repo from "./components/Repo";
import RepoContext from "./state/context";
import RepoReducer from "./state/reducer";

const App = () => {
   const initialState = useContext(RepoContext);
   //deconstruct currentRepo and repos from state returned from useReducer hook
  const [{ currentRepo, repos }, dispatch] = useReducer(
    RepoReducer,
    initialState
  );
   //pass currentRepo, repos and dispatch function to app
  return (
    <RepoContext.Provider value={{ repos, currentRepo, dispatch }}>
      <Nav />
      <Router>
        <Landing path="/" />
        <Repo path="/:repoID" />
      </Router>
    </RepoContext.Provider>
  );
};

export default App;
