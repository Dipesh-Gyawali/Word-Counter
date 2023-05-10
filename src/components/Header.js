import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/jokes">Jokes</NavLink></li>
          </ul>
        </nav>
      </header>
  )
}
