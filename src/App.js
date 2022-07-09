import Home from './pages/home/Home.jsx'
import Product from './pages/product/Product.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Profile from './pages/profile/Profile.jsx'
import Favourites from './pages/favourites/Favourites.jsx'
import EditListing from './pages/editListing/EditListing.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import PrivateRoute from './context/PrivateRoute.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/auth.js'

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Profile' element={<PrivateRoute Component={Profile} />} />
              <Route path='/Favourites' element={<PrivateRoute Component={Favourites} />} />
              <Route path='/EditListing' element={<PrivateRoute Component={EditListing} />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
