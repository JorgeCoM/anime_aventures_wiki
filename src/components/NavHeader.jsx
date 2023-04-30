import { Link } from "react-router-dom"
import {
  LoginButton,
  SocialButton,
  UserComponent
} from "./"
import { SocialNavData } from '../data/NavHeaderData'
import { useAuth0 } from '@auth0/auth0-react'

export const NavHeader = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <div className="h-14 w-screen bg-slate-800 text-white p-1 flex justify-between items-center">
      <div className="w-50 mx-2 h-full">
        <Link to={"/"}>
          <img className="h-full" src={'../Logo.webp' || './Logo.webp'} alt="Logo" />
        </Link>
      </div>
      <div className="mx-1 h-full flex justify-cente items-center w-50">
        {
          isAuthenticated
            ? SocialNavData.map(item => <SocialButton key={item.socialText} items={item} />)
            : <LoginButton />
        }
        {
          isAuthenticated ? <UserComponent user={user} /> : ''
        }
      </div>
    </div>
  )
}
