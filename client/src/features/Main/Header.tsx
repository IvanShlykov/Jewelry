import React from 'react'
import { NavLink } from 'react-router-dom'

function Header():JSX.Element {
  return (
    <div>
        <NavLink to='/'>HomePage</NavLink>
        <NavLink to='/new'>Новинки</NavLink>
        <NavLink to='/collections'>Коллекции</NavLink>
        <NavLink to='/specials'>Специальные предложения</NavLink>
        <NavLink to='/registration'>registration</NavLink>
    </div>
  )
}

export default Header