import React from 'react'
import './TodoSearch.css'
import searchIcon from "../../assets/search.svg";


function TodoSearch() {
    return (
        <div className="search-container">
            <input />
            <div className="search-icon-container">
                <img className="search-icon" src={searchIcon} alt="search" />
            </div>
        </div>
    )
}

export { TodoSearch };
