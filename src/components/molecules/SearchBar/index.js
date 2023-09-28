import React from 'react';
import './style.css';

const SearchBar = ({searchTerm, onSearch}) => {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="flex justify-center items-center">
            <input
                className="bg-zinc-100 rounded py-2 my-5 pl-4 pr-3 search-input"
                placeholder="Szukaj artykułu..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar;