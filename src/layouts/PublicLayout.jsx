import React from 'react'
import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'

export const PublicLayout = () => {
  return (
    <div>
        <h1>Header</h1>
        <ThemeSwap/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default PublicLayout