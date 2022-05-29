import React from 'react';

const Search = ({ filterText, onChange }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Search;
