import React, { useState, useEffect, useRef } from "react";
import RepoGrid from "./RepoGrid";

const Landing = () => {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    fetchRepos(query);
  }, []);

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const encodedURI = encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${query}&sort=stars&order=desc&type=Repositories`
      );
      const reposRes = await fetch(encodedURI);
      const { items: repos } = await reposRes.json();
      console.log(repos);
      setRepos(repos);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    fetchRepos();
  };

  const handleClearSearch = () => {
    setQuery("");
    searchInputRef.current.focus();
  };
  return (
    <div className="container w-full mt-3 mx-auto p-4 m-2 bg-grey-light shadow-lg rounded">
      <h1 className="text-grey-darkest font-semibold mb-2">GitHub-Tool</h1>
      <small className="italic ml-3">Browse some repos!</small>
      <form onSubmit={handleSearch} className="mb-3 p-2">
        <input
          type="text"
          placeholder="search"
          onChange={e => setQuery(e.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button
          type="submit"
          className="bg-red-light border border-red text-white rounded p-1 mx-2"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClearSearch}
          className="bg-white text-red-light border border-red rounded p-1"
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
