import React from "react";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <form className="search-box">
      <label htmlFor="search-box" className="search-box__label">
        Search
      </label>
      <input type="text" name="search" className="search-box__input" />
    </form>
  );
};

export default SearchBox;
