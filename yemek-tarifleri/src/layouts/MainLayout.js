import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import ThemeSelector from '../components/ThemeSelector'

function MainLayout() {
  return (
    <>
        <Navbar/>
        <ThemeSelector />
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}

export default MainLayout