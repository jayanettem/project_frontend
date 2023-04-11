import React from "react";
import {FaSearch} from 'react-icons/fa';
import './searchFunction.css'
import { useState, useEffect } from "react";

function InputBar({setResults}) {
    const [input,setInput] =useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData(input);
        }, 500); // adjust the delay time as needed
        return () => clearTimeout(timer);
    }, [input]);

    const fetchData = (value) => {
        fetch("http://localhost:8089/api/employee/Emp?var="+value)
        .then((response)=> response.json())
        .then((json) => {
            const results = json.filter((Employee) => {
                return(
                    value &&
                    Employee
                );
            });
            setResults(results);
        });
    }

    const handleChange = (value) =>{
        setInput(value)
    }

    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input 
                placeholder="Type to Search.... " 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />

        </div>
    )
}
export default InputBar;
