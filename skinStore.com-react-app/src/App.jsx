import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react'
import Home from './pages/Home'

// import './index.css'

function App() {
  const [user ,setUser] = useState(false)

  const handleLogin = (user) => setUser(user)
  const handleLogout = () => setUser(null)
  
  return (
    <>
    <Router>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/signup" element={<Signup />} />  
      </Routes>    
      <Footer />
    </Router>
  </>
    
  )
}

export default App
