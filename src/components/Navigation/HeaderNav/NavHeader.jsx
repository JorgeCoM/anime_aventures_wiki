import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { SocialNavData } from '../../../data/NavHeaderData'
import { SocialButton } from './SocialButton'
import { UserComponent } from './UserComponent'
import { LoginButton } from './LoginButton'

export const NavHeader = () => {
  const { user, isAuthenticated } = useAuth0()
    return (
        <div className="navbar bg-slate-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className="flex">
                        {SocialNavData.map(n => <SocialButton key={n.socialText} items={n} />)}
                    </div>
                    <label tabIndex={0} className="btn btn-ghost hidden btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu hidden menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="flex">
                            {SocialNavData.map(n => <SocialButton key={n.socialText} items={n} />)}
                        </div>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <NavLink to={"/"} className="btn btn-ghost normal-case text-white text-xl">Anime Aventure Wiki</NavLink>
            </div>
            <div className="navbar-end">
                {isAuthenticated ? <UserComponent user={user}/> : <LoginButton/> }
            </div>
        </div>
    )
}
