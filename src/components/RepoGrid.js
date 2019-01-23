import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RepoGrid = ({ repos }) => (
  <Grid>
    {repos.map((repo, i) => (
      <li key={repo.name}>
        <div className="rank">#{i + 1}</div>
        <ul>
          <li>
            <div className="img-container">
              <img
                src={repo.owner.avatar_url}
                alt={`avatar for ${repo.owner.login}`}
              />
            </div>
          </li>
          <li>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
          <li>@{repo.owner.login}</li>
          <li>{repo.stargazers_count} stars</li>
        </ul>
      </li>
    ))}
  </Grid>
);

RepoGrid.propTypes = {};

export default RepoGrid;

const Grid = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .rank {
    font-size: 20px;
    margin: 10px;
  }

  ul {
    list-style: none;
  }

  .img-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  img {
    width: 150px;
    border-radius: 50%;
  }
`;
