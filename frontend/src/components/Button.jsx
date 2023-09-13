import React, { Children } from 'react'

const Button = ({children, action}) => {
  return (
    <button className='rounded-lg cursor-pointer text-slate-100 bg-slate-700 transition-colors hover:bg-slate-900 px-4 py-2 text-center' onClick={action}>
        {children}
    </button>
  )
}

export default Button