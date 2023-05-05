import { Outlet } from "react-router-dom"
import { SiderBar, NavMain, NavHeader } from "../components"
import {useAuth0} from '@auth0/auth0-react'
// import { UsuarioBan } from "../pages"


export const LayoutHome = () => {
  const {user, isLoading} = useAuth0()

  if(isLoading) return <div>Is loading</div>

  // if(!user) return <UsuarioBan/>
  console.log(user)
  return (
    <div className="bg-slate-700 h-screen">
      <div className="grid h-screen gap-2 grid-rows-12 grid-cols-12">
        <div className=" col-span-12">
          <NavHeader/>
        </div>
        <div className="col-span-3 overflow-x-hidden">
          <NavMain />
        </div>

        <div className="col-span-6 bg-slate-800 overflow-y-hidden">
          <Outlet />
        </div>
        <div className="col-span-3 mr-2 bg-slate-800">
          <SiderBar/>
        </div>
      </div>
    </div>
  )
}
