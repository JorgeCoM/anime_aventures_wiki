import { DarkMode, LogOut, NotifyComponent, SearchComponent } from './';

export const UserComponent = ({ user }) => {
  return (
    <>
      <SearchComponent />
      <NotifyComponent />
      <DarkMode />
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.picture} alt={user.email} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
          <li className='mb-2 hover:bg-gray-500'>
            <a className="text-white justify-between">
              {user.name} {user.email}
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li><a className="btn mb-2 capitalize text-white btn-outline">Settings</a></li>
          <li><LogOut /></li>
        </ul>
      </div>
    </>
  )
}
