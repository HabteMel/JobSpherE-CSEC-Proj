import React from 'react'
import "./SearchBar.css"
import { IoIosSearch } from "react-icons/io";
function SearchBar() {
  return (
    <div>
        <div className="search">
            <div className="searchChild">
                <IoIosSearch  className='searchIcon'/>
                <input type="text" name="" id="" className="searchInput" placeholder='Job title, Keywords, or Company name'/>
                <button className='searchButton'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar