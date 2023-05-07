import { DarkMode, LogOut, NotifyComponent } from './';

export const UserComponent = ({ user }) => {
  return (
    <>
      <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-slate-500 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
<NotifyComponent/>
      <DarkMode/>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.picture} alt={user.email} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52">
          <li className='mb-2 hover:bg-gray-500'>
            <a className="text-white justify-between">
              {user.name}
              <span className="badge">New</span>
            </a>
          </li>
          <li><a className="btn mb-2 capitalize text-white btn-outline">Settings</a></li>
          <li><LogOut/></li>
        </ul>
      </div>
    </>
  )
}
