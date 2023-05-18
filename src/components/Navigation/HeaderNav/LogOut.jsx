import { useAuth0 } from '@auth0/auth0-react';

export const LogOut = () => {
    const { logout } = useAuth0();
    return (
        <button
            className='btn capitalize text-white btn-outline'
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log out
        </button>
    )
}
