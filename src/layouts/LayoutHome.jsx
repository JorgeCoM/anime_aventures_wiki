import { Outlet } from "react-router-dom"
import { SiderBar, NavMain, NavHeader } from "../components"
// import {useAuth0} from '@auth0/auth0-react'
// import { UsuarioBan } from "../pages"


export const LayoutHome = () => {
  // const {user, isLoading} = useAuth0()

  // if(isLoading) return <div>Is loading</div>

  // if(!user) return <UsuarioBan/>
  // console.log(user)
  return (
    <div className="bg-slate-700 h-screen">
      <div className="grid h-screen grid-cols-12">
        <div className="col-span-12">
          <NavHeader/>
        </div>
        <div className="col-span-2 overflow-x-hidden">
          <NavMain />
        </div>

        <div className="col-span-7 bg-slate-700 overflow-y-scroll">
          <Outlet />
        </div>
        <div className="col-span-3 bg-slate-700">
          <SiderBar/>
        </div>
      </div>
    </div>
  )
}
