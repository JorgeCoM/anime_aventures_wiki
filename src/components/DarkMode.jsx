import { useState } from 'react'

export const DarkMode = () => {

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
          style={{ backgroundColor: isHover ? '#1e293b' : '', borderColor: `#ffffff` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          Claro/Oscuro
      </button>
  )
}
