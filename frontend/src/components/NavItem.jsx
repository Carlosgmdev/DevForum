import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({children, to}) => {
  return (
    <Link
        className={`p-2 rounded-lg ${
          location.pathname === `/dashboard/${to}`
            ? "font-bold"
            : ""
        }`}
        to={to}
      >
        {children}
      </Link>
  )
}

export default NavItem