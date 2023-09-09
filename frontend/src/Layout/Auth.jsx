import React, { Children, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import { useNavigate } from 'react-router-dom'

const Auth = ({user}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(user.id) {
      navigate('/dashboard/home')
    } else {
      navigate('/login')
    }
  }, []);

  return (
    <div className='w-full h-screen bg-slate-100 flex items-center justify-center text-slate-500'>
        <div className='w-96 bg-white rounded-xl shadow-2xl p-10 flex flex-col gap-10 items-center'>
            <Logo/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Auth