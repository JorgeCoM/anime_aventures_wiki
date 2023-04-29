import { useState } from "react"
import { NavLink } from "react-router-dom"

export const SocialButton = ({ items, user }) => {
    const { socialText, color, link, icon } = items

    const [isHover, setisHover] = useState(false)

    const handleMouseEnter = () => {
        setisHover(true);
    };
    const handleMouseLeave = () => {
        setisHover(false);
    };

    return (
        <div className="">
            <NavLink
                to={link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: isHover ? `${color}` : 'transparent', borderColor: `${color}` }}
                className={`ml-2 transition relative inline-block w-10 h-10 rounded-md hover:text-white p-2`}>
                <div className="w-full h-full">
                    <div className="flex justify-between items-center w-full h-full">
                        <img className="w-full h-full object-cover" src={icon} alt={socialText} />
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
