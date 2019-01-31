import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";
import Modal from "./Modal";
import useToggle from "../hooks/useToggle";

const RepoGrid = ({ repos }) => {
   const [on, setOn] = useToggle(false);
  return (
    <Grid>
      {repos.map((repo, i) => (
        <div key={repo.id} className="container p-2" onClick={() => setOn(true)}>
          <div className="font-thin text-center">
            <span>#{i + 1}</span> -- <span>{repo.stargazers_count} stars</span>
          </div>
          <div className="container text-center">
            <div className="img-container text-center mx-auto">
              <img
                src={repo.owner.avatar_url}
                alt={`avatar for ${repo.owner.login}`}
              />
            </div>
            <Link to={`/${repo.id}`} className="text-black font-bold">
              {repo.name}
            </Link>
            <br />
            <span className="font-thin text-grey-darkest">
              @{repo.owner.login}
            </span>
            </div>
            {on && <Modal open={on} toggle={setOn}>
               will this work?
            </Modal>}
        </div>
      ))}
    </Grid>
  );
};

RepoGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RepoGrid;

const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;

  .img-container {
    width: 100px;
    height: 100px;
    margin: 1em auto;
  }

  img {
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  a:hover {
    transition: color 200ms ease;
    color: hsl(0, 55%, 57%);
  }
`;
