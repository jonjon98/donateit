import React from 'react'
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Profile = () => {

  const auth = getAuth();
  const user = auth.currentUser; 

  const [openPosts, setOpenPosts] = useState(false);
  const [openListings, setOpenListings] = useState(false);

  return (
   <div>
     <p> 
       Name: {user.displayName}
     </p>
     <p>
       Email: {user.email}
     </p>
     <p>
       Points: placeholder
     </p>
     {/* User's Posts */}
     <Button
        onClick={() => setOpenPosts(!openPosts)}
        aria-controls="example-collapse-text"
        aria-expanded={openPosts}
      >
        Posts
      </Button>
      <Collapse in={openPosts}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
      <br />

      {/* User's Listings */}
      <Button
        onClick={() => setOpenListings(!openListings)}
        aria-controls="example-collapse-text"
        aria-expanded={openListings}
      >
        Listings
      </Button>
      <Collapse in={openListings}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
   </div>
  );
}

export default Profile