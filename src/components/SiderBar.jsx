import React from 'react'
import { NavLink } from 'react-router-dom'

export const SiderBar = () => {
  return (
    <div className='text-white p-2 grid overflow-hidden gap-2 grid-cols-1'>
      <NavLink className="card h-64 bg-slate-600 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-center">title!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde quisquam accusamus nobis, iure distinctio deleniti</p>
          <div className="card-actions justify-end">
          <button className="btn btn-ghost btn-outline text-white">Rad more</button>
          </div>
        </div>
      </NavLink>
      <NavLink className="card h-64 bg-slate-600 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-center">title!</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde quisquam accusamus nobis, iure distinctio deleniti</p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost btn-outline text-white">Rad more</button>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
