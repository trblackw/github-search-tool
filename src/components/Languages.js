import React from "react";
import PropTypes from "prop-types";
import languages from "../languages.json";

const Languages = ({ onChange }) => {
  return (
    <div className="inline-block relative w-64 p-1">
      <select
        className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow-md leading-tight focus:outline-none focus:shadow-outline"
        onChange={e => onChange(e)}
      >
        <option>JavaScript</option>
        {languages.map(lang => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

Languages.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Languages;
