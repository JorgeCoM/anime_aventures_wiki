import { useState } from "react";
import { NavLink } from "react-router-dom"

export const NavAdminButton = ({ item }) => {
    const [isHover, setisHover] = useState(false)

    const handleMouseEnter = () => {
        setisHover(true)
    };

    const handleMouseLeave = () => {
        setisHover(false)
    };
    const { path, name } = item
    return (
        <NavLink
            to={path}
            style={{ backgroundColor: isHover ? '#1e293b' : '', borderColor: `#ffffff`, color: '#fff' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='w-full h-[30px] flex items-center rounded-lg pl-2'
        >
            {name}
        </NavLink>
    )
}
