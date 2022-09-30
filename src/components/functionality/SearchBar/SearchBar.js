import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

function SearchBar() {
    return (
        <form className="search-form" style={{ marginLeft: '40px' }}>
            <input
                type="text"
                placeholder="Tim truyen"
            />
            <div className='search-icon-container'>
                <SearchIcon className="search-icon" />
            </div>
        </form>
    )
}

export default SearchBar