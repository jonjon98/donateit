import React from 'react'
import SearchBar from './SearchBar.jsx'
import { useState } from 'react';

const Search = ({ searchType }) => {
  var elements = [];
  if(searchType === "posts"){
    //placeholder for the posts, have to extract from DB
    elements = [
      { id: '1', name: 'This first post is about React (post1)' },
      { id: '2', name: 'This next post is about Preact (post2)' },
      { id: '3', name: 'We have yet another React post! (post3)' },
      { id: '4', name: 'This is the fourth and final post (post4)' },
    ];
  }
  else if(searchType === "items"){
    //placeholder for the posts, have to extract from DB
    elements = [
      { id: '1', name: 'This first post is about React (item1)' },
      { id: '2', name: 'This next post is about Preact (item2)' },
      { id: '3', name: 'We have yet another React post! (item3)' },
      { id: '4', name: 'This is the fourth and final post (item4)' },
    ];
  } 

  const filterElements = (elements, query) => {
    if (!query) {
        return elements;
    }

    return elements.filter((elements) => {
        const elementsName = elements.name.toLowerCase();
        return elementsName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredElements = filterElements(elements, searchQuery);
  
  return (
    <div>
      <SearchBar  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}               
      />
      <ul>
        {filteredElements.map(post => (
          <li key={post.id}>{post.name}</li>
         ))}
      </ul>
    </div>
  )
}

export default Search