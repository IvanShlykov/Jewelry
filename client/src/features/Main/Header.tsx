import React from 'react'
import { NavLink } from 'react-router-dom'

function Header():JSX.Element {
  return (
    <div>
        <NavLink to='/'>Phenomenons</NavLink>
        <NavLink to='/registration'>registration</NavLink>
    </div>
  )
}

export default Header