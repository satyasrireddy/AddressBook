import React from "react";

const SearchBar = () => {
    return (
      <> 
      <div className="search">
      <h5> Search Here</h5>
      <form className="searchBar">
      
        <input
          type="text"
          className="searchBarInput"
        />
        
        <br></br>
        <button className="btn btn-success btn-lg"> Search </button>
      </form>
      </div>
      </>
    );
    
  };
  export default SearchBar;