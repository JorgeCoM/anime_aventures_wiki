import { NavLink } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
    const { loginWithRedirect, } = useAuth0()
    return (
        <>
            <NavLink
                onClick={() => loginWithRedirect()}
                className={"btn capitalize btn-info btn-outline p-2"}>
                Sing up
            </NavLink>
            <NavLink
                onClick={() => loginWithRedirect()}
                className={"ml-2 capitalize btn btn-outline btn-info p-2"}>
                Log in
            </NavLink>
        </>
    )
}
