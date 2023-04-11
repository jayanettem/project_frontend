import React from "react";
import {useState} from "react";
import './searchFunction.css';
import InputBar from "./input_bar";
import SearchResultList from "./searchResultList";

function SearchBar() {

    const [results, setResults] = useState([])

    return (
        <div className="searchBarContainer">
            <InputBar setResults={setResults}></InputBar>
            <SearchResultList results={results}></SearchResultList>
        </div>
    );
}

export default SearchBar;