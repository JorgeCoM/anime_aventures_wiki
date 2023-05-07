import React from 'react'

export const NotifyItems = () => {
    return (
        <div className="grid grid-cols-4 mt-2 mb-2">
            <img className="col-span-1 btn-circle btn" src="https://lh3.googleusercontent.com/a/AGNmyxYB66D88R6p_w1XunCERz5fW8vNXW3QVduPGJKldg=s96-c" alt="" />
            <div className="col-span-2">
                <p className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className="text-white text-[10px]">Hora de publicacion</p>
            </div>
            <img className=" col-span-1" src="./Logo.webp" alt="" />
        </div>
    )
}
