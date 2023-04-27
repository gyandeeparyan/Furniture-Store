import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Contact } from './components'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage';
import SingleProductPage from './pages/SingleProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage';

function App() {
  return <BrowserRouter>

<Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products/:id' element={<SingleProductPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
  </BrowserRouter>
}

export default App
