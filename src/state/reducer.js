import { FETCH_REPOS, SELECT_REPO } from "./constants";

const initialState = {
  repos: [],
  currentRepo: localStorage.getItem("currentRepo")
    ? JSON.parse(localStorage.getItem("currentRepo"))
    : {}
};

const RepoReducer = (state = initialState, { type, currentRepo, repos }) => {
  switch (type) {
    case FETCH_REPOS:
      console.log(
        `%c {type: FETCH_REPOS }`,
        "color: yellow; font-weight: bold"
      );
      return { ...state, repos };
    case SELECT_REPO:
      console.log(
        `%c {type: SELECT_REPO }`,
        "color: green; font-weight: bold"
      );
      return { ...state, currentRepo };
    default:
      return state;
  }
};

export default RepoReducer;
