import React from 'react'
import SearchBar from './SearchBar.jsx'
import Popup from '../popup/Popup.jsx';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Search = ({ searchType }) => {
  //handle data extraction from DB
  var elements = [];
  var boolPosts = false;
  var boolItems = false;
  var boolRewards = false;
  if (searchType === "posts"){
    //placeholder for the posts, have to extract from DB
    elements = [
      { id: '0', name: "first", desc: '(post1)', about: 'This first post is about React (post1)', },
      { id: '1', name: "second", desc: '(post2)', about: 'This next post is about Preact (post2)' },
      { id: '2', name: "third", desc: '(post3)', about: 'We have yet another React post! (post3)' },
      { id: '3', name: "fourth", desc: '(post4)', about: 'This is the fourth and final post (post4)' },
    ];
    boolPosts = true;
    boolItems = false;
    boolRewards = false;
  }
  else if (searchType === "items"){
    //placeholder for the posts, have to extract from DB
    elements = [
      { id: '0', name: "first", desc: '(item1)', about: 'This first post is about React (item1)' },
      { id: '1', name: "second", desc: '(item2)', about: 'This next post is about Preact (item2)' },
      { id: '2', name: "third", desc: '(item3)', about: 'We have yet another React post! (item3)' },
      { id: '3', name: "fourth", desc: '(item4)', about: 'This is the fourth and final post (item4)' },
    ];
    boolPosts = false;
    boolItems = true;
    boolRewards = false;
  } 
  else if (searchType === "rewards"){
    elements = [
      { id: '0', name: "Grab Voucher", desc: '(reward1)', about: 'This first post is about React (Grab Voucher)', },
      { id: '1', name: "StarBucks Voucher", desc: '(reward2)', about: 'This next post is about Preact (StarBucks Voucher)' },
      { id: '2', name: "Cruise Vacation", desc: '(reward3)', about: 'We have yet another React post! (Cruise Vacation)' },
      { id: '3', name: "Nintendo Switch", desc: '(reward4)', about: 'This is the fourth and final post (Nintendo Switch)' },
    ];
    boolPosts = false;
    boolItems = false;
    boolRewards = true;
  }

  //handle searching algorithm
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

  //handle popup
  const [isOpen, setIsOpen] = useState(false);
  const [elementSelected, setElementSelected] = useState(null);
 
  const togglePopup = (id) => {
    setElementSelected(id);
    setIsOpen(!isOpen);
  }
  
  return (
    <div>

      {/* Posts */}
      <div hidden={!boolPosts}>
        <p>Posts</p>
        <SearchBar  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}               
        />
        <ul>
          {filteredElements.map(elements => (
            <li className="d-inline-flex p-2 bd-highlight" key={elements.id}>
              <Card style={{color: "#000000"}}>
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    {elements.name}
                  </Card.Title>
                  <Card.Text>
                    {elements.desc}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>togglePopup(elements.id)}>Read More</Button>
                </Card.Body>
              </Card>
            </li>
           ))}          
        </ul>
        {/* Popup */}
        {isOpen && <Popup
          content={<>
            <b>Design your Popup</b>
            <p>{elements[elementSelected].about}</p>
            <button>Upvote</button>
          </>}
          handleClose={togglePopup}
        />}
      </div>

      {/* Items */}
      <div hidden={!boolItems}>
        <p>Items</p>
        <SearchBar  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}               
        />
        <ul>
          {filteredElements.map(elements => (
            <li className="d-inline-flex p-2 bd-highlight" key={elements.id}>
              <Card style={{color: "#000000"}}>
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    {elements.name}
                  </Card.Title>
                  <Card.Text>
                    {elements.desc}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>togglePopup(elements.id)}>Read More</Button>
                </Card.Body>
              </Card>
            </li>
           ))}          
        </ul>
        {/* Popup */}
        {isOpen && <Popup
          content={<>
            <b>Design your Popup</b>
            <p>{elements[elementSelected].about}</p>
            <button>Purchase</button>
          </>}
          handleClose={togglePopup}
        />}
      </div>

      {/* Rewards */}
      <div hidden={!boolRewards}>     
        <p>Rewards</p>
        <SearchBar  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}               
        />
        <ul>
          {elements.map(elements => (
            <li className="d-inline-flex p-2 bd-highlight" key={elements.id}>
              <Card style={{color: "#000000"}}>
                <Card.Img />
                <Card.Body>
                  <Card.Title>
                    {elements.name}
                  </Card.Title>
                  <Card.Text>
                    {elements.desc}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>togglePopup(elements.id)}>Read More</Button>
                </Card.Body>
              </Card>
            </li>
          ))}          
        </ul>
        {/* Popup */}
        {isOpen && <Popup
          content={<>
            <b>Design your Popup</b>
            <p>{elements[elementSelected].about}</p>
            <button>Purchase</button>
          </>}
          handleClose={togglePopup}
        />}
      </div>   

    </div>
  )
}

export default Search