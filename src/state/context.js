import { createContext } from "react";

const RepoContext = createContext({
  //check to see if there is a repo in localstorage
  currentRepo: localStorage.getItem("repo")
    ? JSON.parse(localStorage.getItem("repo"))
    : {}
});


export default RepoContext;