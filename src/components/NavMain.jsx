import { NavItems } from './NavItems'
import { NavOptions } from '../data/NavData.js'

export const NavMain = () => {

  return (
    <div className=' '>
      <div className="grid grid-cols-1 h-screen gap-2 md:snap-y snap-mandatory overflow-x-hidden">
        {
          NavOptions.map((item) => {
            return <NavItems key={item.text} item={item}/>
          })
        }
      </div>
    </div>
  )
}