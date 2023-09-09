import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link className='text-2xl' to={'/'}>
        {'<DevForum/>'}
    </Link>
  )
}

export default Logo