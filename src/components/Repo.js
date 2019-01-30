import React, { useEffect, useContext } from "react";
import RepoContext from "../state/context";
import { selectRepo } from "../state/actions";
import styled from "styled-components";
import useToggle from '../hooks/useToggle';

const Repo = ({ repoID }) => {
   const { currentRepo, repos, dispatch } = useContext(RepoContext);
   const [open, setOpen] = useToggle(false);
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
    watchers,
    owner
  } = currentRepo;
  return (
    <div className="container max-w-md mx-auto p-5 border rounded shadow-md bg-grey-light mt-3">
        <h1 className="ml-2 text-5xl"> <span><small className='font-thin'>{owner.login}</small>/</span>{name}</h1>
      <span className="ml-3 text-grey-dark">{language}</span>
      <Description>
        <p className="font-thin text-center">{description}</p>
      </Description>
        <hr />
        <button className='bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow' onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"} Details</button>
      {open && <StyledList className="bg-grey-lighter">
        <label htmlFor="issues" className="font-bold">Open Issues</label>
           <li name="issues" className='mb-4'>{open_issues}</li>
           <label htmlFor="forks" className="font-bold">Forks</label>
        <li name="forks">{forks}</li>
      </StyledList>}
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
