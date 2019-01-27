import { createContext } from "react";

const RepoContext = createContext({
  //check to see if repos or currentRepo exist in localStorage
  repos: localStorage.getItem("repos")
    ? JSON.parse(localStorage.getItem("repos"))
    : [],
  currentRepo: localStorage.getItem("currentRepo")
    ? JSON.parse(localStorage.getItem("currentRepo"))
    : {}
});

export default RepoContext;
