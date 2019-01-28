import React, { useState, useContext, useEffect, useRef } from "react";
import RepoGrid from "./RepoGrid";
import Languages from "./Languages";
import { fetchRepos } from "../state/actions";
import ReposContext from "../state/context";

const Landing = () => {
  const [query, setQuery] = useState("JavaScript");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();
  const { dispatch, repos } = useContext(ReposContext);

  useEffect(
    () => {
      try {
        setLoading(true);
        //dispatch action creator, passing it dispatch
        fetchRepos(query, dispatch);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      //when there's a change in the query, re-render
    },
    [query]
  );

  const handleSearch = e => {
    e.preventDefault();
    fetchRepos(query, dispatch);
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <div className="container w-full mt-3 mx-auto p-4 m-2 bg-grey-light shadow-lg rounded">
      <h1 className="text-grey-darkest font-semibold mb-2">GitHub-Tool</h1>
      <small className="italic ml-3">
        Browsing <b>{query}</b> repos
      </small>
      <form onSubmit={handleSearch} className="mb-3 p-2">
        <Languages onChange={handleChange} />
        <button
          type="submit"
          className="bg-red-light border border-red text-white rounded p-1 mx-2"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClearSearch}
          className="bg-white text-red-light rounded p-1"
        >
          Clear
        </button>
      </form>
      {loading ? (
        <h2 className="font-bold">loading...</h2>
      ) : (
        <RepoGrid repos={repos} />
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Landing;
