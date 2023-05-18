import { DarkMode } from "./DarkMode"
import { LogOut } from "./LogOut"
import { NotifyComponent } from "./Notify/NotifyComponent"
import { SearchComponent } from "./Notify/SearchComponent"


export const UserComponent = ({ user }) => {
  return (
    <>
      <SearchComponent/>
      <NotifyComponent />
      <DarkMode />
      <div className="dropdown dropdown-end dropdown-hover">
        <label tabIndex={0} className="btn btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.picture} alt={user.email} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 bg-slate-500 rounded-box w-52">
          <li>
            <div className="text-white hover:bg-transparent cursor-default justify-between">
              {user.name} {user.email}
              {/* <span className="badge">New</span> */}
            </div>
          </li>
          <li><a className="btn mb-2 capitalize text-white btn-outline">Settings</a></li>
          <li><LogOut /></li>
        </ul>
      </div>
    </>
  )
}
