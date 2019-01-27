import { FETCH_REPOS, SELECT_REPO } from "./constants";

export const fetchRepos = async (query, dispatch) => {
  //TODO: check localstorage for repos to prevent unnessecary api calls; need to take into account the query to check this
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${query}&sort=stars&order=desc&type=Repositories`
  );
  const reposRes = await fetch(encodedURI);
  const { items: repos } = await reposRes.json();
  localStorage.setItem("repos", JSON.stringify(repos));
  return dispatch({ type: FETCH_REPOS, repos });
};

export const selectRepo = (id, repos, dispatch) => {
  let currentRepo;
  let previousRepo = localStorage.getItem("currentRepo")
    ? JSON.parse(localStorage.getItem("currentRepo"))
    : null;
  //check to see if the repo in local storage is the same as the repo being clicked on if it is, than just return the same repo
  if (previousRepo && Number(previousRepo.id) === Number(id)) {
    return dispatch({ type: SELECT_REPO, currentRepo: previousRepo });
    //if there is a repo in local storage and it's not the one being clicked, clear local storage and set the new repo as currentRepo
  } else if (previousRepo && !Number(previousRepo.id) === Number(id)) {
    currentRepo = repos.find(repo => repo.id === Number(id));
    localStorage.removeItem("currentRepo");
    localStorage.setItem("currentRepo", currentRepo);
    return dispatch({ type: SELECT_REPO, currentRepo });
  }
  //else just set the currentRepo being clicked to localstorage
  currentRepo = repos.find(repo => repo.id === Number(id));
  localStorage.setItem("currentRepo", JSON.stringify(currentRepo));
  return dispatch({ type: SELECT_REPO, currentRepo });
};
