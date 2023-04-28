import { NavItems } from './NavItems'
import { NavOptions } from '../data/NavData.js'

export const NavMain = () => {

  return (
    <div>
      <div className=" grid-cols-1 gap-2 grid">
        {
          NavOptions.map((item) => {
            return <NavItems key={item.text} item={item}/>
          })
        }
      </div>
    </div>
  )
}