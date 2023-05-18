import { NavItems } from './NavItems'
import { NavOptions } from '../../data/NavData.js'

export const NavMain = () => {

  return (
      <div className="grid p-2 grid-cols-1 h-screen gap-2">
        {
          NavOptions.map((item) => {
            return <NavItems key={item.text} item={item}/>
          })
        }
      </div>
  )
}