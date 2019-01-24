import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RepoGrid = ({ repos }) => (
  <Grid>
    {repos.map((repo, i) => (
      <div key={repo.name} className="container p-2">
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

          <a href={repo.html_url} className="text-black font-bold">
            {repo.name}
          </a>
          <br />
          <span className="font-thin text-grey-darkest">@{repo.owner.login}</span>
        </div>
      </div>
    ))}
  </Grid>
);

RepoGrid.propTypes = {};

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
`;
