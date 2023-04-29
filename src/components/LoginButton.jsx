import { NavLink } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
    const { loginWithRedirect, } = useAuth0()
    return (
        <>
            <NavLink
                onClick={() => loginWithRedirect()}
                className={"mx-3 transition rounded-md hover:bg-white hover:text-black p-2 border"}>
                Sing up
            </NavLink>
            <NavLink
                onClick={() => loginWithRedirect()}
                className={"p-2 transition rounded-md hover:bg-white hover:text-black border"}>
                Log in
            </NavLink>
        </>
    )
}
