import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import AccountPage from './pages/AccountPage'
import LoyaltyPage from './pages/LoyaltyPage'
import CategoriesPage from './pages/CategoriesPage'
import CategoriesNewPage from './pages/CategoriesNewPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import DeliveryPage from './pages/DeliveryPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/loyalty' element={<LoyaltyPage />} />
                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/new' element={<CategoriesNewPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/product' element={<ProductPage />} />
                <Route path='/delivery' element={<DeliveryPage />} />
            </Routes>
        </Router>
    )
}

export default App
