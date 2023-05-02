import { Outlet } from "react-router-dom"
import { NavHeader, NavAdmin } from "../components"

export const LayoutAdmin = () => {
  return (
    <div className="bg-slate-700 h-screen">
    <div className="grid h-screen gap-2 grid-cols-12">
      <div className="col-span-12">
        <NavHeader/>
      </div>
      <div className="col-span-3 overflow-x-hidden">
        <NavAdmin/>
      </div>

      <div className="col-span-9 rounded-lg mr-2 mb-2 bg-slate-800">
        <Outlet />
      </div>
    </div>
  </div>
  )
}
