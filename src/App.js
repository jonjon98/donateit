import Home from './pages/home/Home.jsx'
import Listing from './pages/listing/Listing.jsx'
import Product from './pages/product/Product.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Profile from './pages/profile/Profile.jsx'
import Recycling from './pages/recycling/Recycling.jsx'
import Favourites from './pages/favourites/Favourites.jsx'
import EditListing from './pages/editListing/EditListing.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Listing' element={<Listing />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/Recycling' element={<Recycling />} />
              <Route path='/Favourites' element={<Favourites />} />
              <Route path='/EditListing' element={<EditListing />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
