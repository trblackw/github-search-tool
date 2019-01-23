import React, { useEffect, useState, useContext } from "react";
import ReposContext from "../state/context";
import PropTypes from "prop-types";
import { fetchRepos } from "../state/actions";
import RepoGrid from "./RepoGrid";

const Landing = () => {
  //   const { boards } = useContext(ReposContext);
  const { search, setSearch } = useState("javascript");
  const [repos, setRepos] = useState([]);

  const fetchRepos = async language => {
    const encodedURI = encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    const reposRes = await fetch(encodedURI);
    const { items: repos } = await reposRes.json();
    setRepos(repos);
  };

  useEffect(
    () => {
      fetchRepos(search);
    },
    [search]
  );
  return (
    <div>
      <input type="text" onChange={e => setSearch(e.target.value)} />
      <RepoGrid repos={repos} />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
