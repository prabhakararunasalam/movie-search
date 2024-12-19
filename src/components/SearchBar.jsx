import React from 'react';

const SearchBar = ({onSearch, onFilterChange}) => {
    return (
        <div className='flex items-center justify-center'>
            <input type="text" 
            className='border p-2 w-1/2 mt-10'
            placeholder='Search For Movies...'
            onChange={(e)=>onSearch(e.target.value)}
            />

            <select className='border p-2 rounded mt-10 bg-pink-300 ' onChange={(e)=>onFilterChange(e.target.value)}>
                <option value="">All</option>
                <option value="movies">Movies</option>
                <option value="series">Series</option>
            </select>
        </div>
    );
};

export default SearchBar;