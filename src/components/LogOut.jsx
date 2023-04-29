import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'

export const LogOut = () => {
    const { logout } = useAuth0();

    const [isHover, setisHover] = useState(false)

    const handleMouseEnter = () => {
        setisHover(true)
    };

    const handleMouseLeave = () => {
        setisHover(false)
    };
    return (
        <button
            className='p-2'
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            style={{ backgroundColor: isHover ? '#1e293b' : '', borderColor: `#ffffff` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            Log out
        </button>
    )
}
