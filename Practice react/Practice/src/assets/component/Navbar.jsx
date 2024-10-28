import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-around'>
        <div onClick={() => {navigate('/')}} className='cursor-pointer'>LoGo</div>

        <ul className='flex items-center gap-4'>
            <li><NavLink  className={({isActive}) => `'cursor-pointer' ${isActive ? 'text-orange-600' : 'text-black'}`}  to = '/'>Home</NavLink></li>
            <li><NavLink  className={({isActive}) => `'cursor-pointer' ${isActive ? 'text-orange-600' : 'text-black'}`}  to = '/about'>About</NavLink></li>
            <li><NavLink  className={({isActive}) => `'cursor-pointer' ${isActive ? 'text-orange-600' : 'text-black'}`}  to = '/contact'>Contact</NavLink></li>
            <li><NavLink  className={({isActive}) => `'cursor-pointer' ${isActive ? 'text-orange-600' : 'text-black'}`}  to = '/followers'>Followers</NavLink></li>
            <li><NavLink  className={({isActive}) => `'cursor-pointer' ${isActive ? 'text-orange-600' : 'text-black'}`}  to = '/latest'>Latest</NavLink></li>
        </ul>
        <div>
          <button onClick={() => {navigate('/signup')}}  className='rounded-full bg-orange-500 text-white px-3 py-2 cursor-pointer'>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar