import React, { useEffect, useContext } from "react";
import RepoContext from "../state/context";
import { selectRepo } from "../state/actions";
import styled from "styled-components";

const Repo = ({ repoID }) => {
  const { currentRepo, repos, dispatch } = useContext(RepoContext);
  useEffect(
    () => {
      //dispatch the selectRepo action creator
      selectRepo(repoID, repos, dispatch);
      console.log(currentRepo);
    },
    //when there's a change in the currentRepo, re-render
    [currentRepo.id]
  );
  //deconstruct properties to be used from currentRepo
  const {
    name,
    description,
    forks,
    homepage,
    language,
    open_issues,
    stargazers_count,
    ssh_url,
    watchers
  } = currentRepo;
  return (
    <div className="container max-w-md mx-auto p-3 border border-red-light rounded shadow-md bg-grey-light mt-3">
      <h1 className="ml-2 text-5xl">{name}</h1>
      <span className="ml-3 text-grey-dark">{language}</span>
      <Description>
        <p className="font-thin">{description}</p>
      </Description>
      <hr />
      <StyledList>
        <label htmlFor="issues">Open Issues</label>
        <li name="issues">{open_issues}</li>
      </StyledList>
    </div>
  );
};

export default Repo;

const Description = styled("div")`
  margin: 1em auto;
  padding: 1em;
  text-align: left;
`;

const StyledList = styled("ul")`
  list-style: none;
  padding: 0.7em;
  margin-left: 0.5rem;

  label {
    font-style: italic;
  }
`;
