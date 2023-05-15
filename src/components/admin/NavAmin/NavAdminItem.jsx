import { useState } from 'react'
import { NavAdminButton } from './NavAdminButton'
import { NavLink } from 'react-router-dom'

export const NavAdminItem = ({ item }) => {
    const { isShow, option, action, path } = item
    const [isOpen, setisOpen] = useState(isShow)
    

    return (
        <div className='relative flex flex-col items-center w-full rounded-lg'>
            <NavLink
                to={path}
                onClick={() => setisOpen((prev) => !prev)}
                className=' bg-slate-400 mb-2 p-3 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wide border-2 border-transparent hover:border-white duration-300 hover:text-white'>
                {option}
            </NavLink>
            {
                isOpen && (
                    <div
                        className=' bg-slate-400 ml-2 relative top-30 flex flex-col items-start rounded-lg w-full'>
                        {
                            action.map(item => {
                                return <NavAdminButton key={item.name} item={item} />
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
