<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
=======
import Home from './pages/home/Home.jsx'
import Product from './pages/product/Product.jsx'
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'
import Favourites from './pages/favourites/Favourites.jsx'
import EditListing from './pages/editListing/EditListing.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 2000d9ddf7d799378ee55a5de0a479d3e025f180

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Favourites' element={<Favourites />} />
              <Route path='/EditListing' element={<EditListing />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
