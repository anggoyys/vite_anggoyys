import React from 'react'
import { NavLink } from 'react-router'

export const home = () => {
  return (
    <div>
        <h1>HOMEPAGE</h1>

        <NavLink to="/about" className="btn btn-primary">
        Ke About Page</NavLink>
    </div>
  )
}

export default home