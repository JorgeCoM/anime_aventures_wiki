import React, { useState } from 'react'
import { SocialNavData } from '../data/NavHeaderData'
import { useAuth0 } from '@auth0/auth0-react';

export const UsuarioBan = ({user}) => {
  const { logout } = useAuth0();
  const [isHover, setisHover] = useState(false)


    const { link } = SocialNavData.find(item => item.socialText === 'discord')

    const handleMouseEnter = () => {
        setisHover(true)
      };
    
      const handleMouseLeave = () => {
        setisHover(false)
      };
    return (
        <>
            <div className='w-screen h-screen bg-slate-800 flex justify-center items-center'>
                <div className=' bg-slate-600 w-96 h-96 grid grid-cols-12'>
                    <div className='text-center col-span-12 p-4'>
                        <h1 className='text-white text-center underline uppercase font-bold'>Algo salio mal...</h1>
                        <p className=' text-white'>Vaya tu cuenta fue bloquada para mas info ponte en contacto con un administrador via <a className='font-bold underline text-purple-500' href={link}>discord</a>.</p>
                    </div>
                    <div className='col-span-12 text-center'>
                        <button
                            className='p-2 rounded-lg transition text-white bg-slate-400'
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                            style={{ backgroundColor: isHover ? '#1e293b' : '', borderColor: `#ffffff` }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
