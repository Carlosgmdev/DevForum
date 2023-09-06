import React, { Children } from 'react'

const Auth = ({children}) => {
  return (
    <div className='w-100 h-screen bg-slate-200 flex items-center justify-center text-slate-500'>
        <div className='w-96 bg-white rounded-xl shadow-xl p-10 flex flex-col gap-10 items-center'>
            <h1 className='text-3xl font-mono text-slate-700'>{`<DevForum/>`}</h1>
            {children}
        </div>
    </div>
  )
}

export default Auth