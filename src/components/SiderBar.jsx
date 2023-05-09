import React from 'react'
import { NavLink } from 'react-router-dom'

export const SiderBar = () => {
  return (
    <div className='text-white p-2 grid overflow-y-auto overflow-x-hidden h-[550px] gap-2 grid-cols-1'>
      <NavLink className='w-full duration-300 hover:opacity-70 hover:bg-gray-600 h-[250px] col-span-1'>
        <div className='flex flex-col'>
          <div className='w-full h-[150px]'>
            <img className='w-full h-full' src="./Logo.webp" alt="" />
          </div>
          <div>
            <p className='text-center text-3xl font-bold'>title</p>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde quisquam accusamus nobis, iure distinctio deleniti</p>
          </div>
        </div>
      </NavLink>
      <NavLink className='w-full duration-300 hover:opacity-70 hover:bg-gray-600 h-[250px] col-span-1'>
        <div className='flex flex-col'>
          <div className='w-full h-[150px]'>
            <img className='w-full h-full' src="./Logo.webp" alt="" />
          </div>
          <div>
            <p className='text-center text-3xl font-bold'>title</p>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde quisquam accusamus nobis, iure distinctio deleniti</p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
