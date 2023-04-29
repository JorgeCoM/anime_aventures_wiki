import React, { useState } from 'react'
import { DarkMode, LogOut } from './';

export const UserComponent = ({ user }) => {
  const [profile, setprofile] = useState(false)

  const handleActiveProfile = () => {
    setprofile(!profile)
  }

  return (
    <>
      <button className=' relative'>
        <img
          onClick={handleActiveProfile}
          className='ml-3 w-10 h-10 rounded-full'
          src={user.picture} alt={user.name} />
      </button>
      <div>
        <p className='ml-1'>{user.name}</p>
        <div
          className={`${profile ? '' : 'hidden'} right-2 top-14 flex flex-col absolute bg-slate-700`}>
            <DarkMode/>
            <LogOut/>
        </div>
      </div>
    </>
  )
}
