import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <form action="/" method="get">
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search"
            name="search" 
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar