import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Wishlist from '../pages/Wishlist'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter