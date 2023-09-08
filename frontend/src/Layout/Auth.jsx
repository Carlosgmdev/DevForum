import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='w-full h-screen bg-slate-100 flex items-center justify-center text-slate-500'>
        <div className='w-96 bg-white rounded-xl shadow-2xl p-10 flex flex-col gap-10 items-center'>
            <h1 className='text-3xl font-mono'>{`<DevForum/>`}</h1>
            <Outlet/>
        </div>
    </div>
  )
}

export default Auth