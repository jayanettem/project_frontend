import React from "react";
import './searchFunction.css';

function SearchResultList({results}) {
    return (
        <div className="resultsList">
            {
                results.map((result, id) => {
                    console.log(result);
                    return <button key={id}>{result}</button>
                })
            }
        </div>
    )
}

export default SearchResultList;