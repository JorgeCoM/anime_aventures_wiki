import { Outlet } from "react-router-dom"
import { SiderBar, NavMain } from "../components"
import { useState } from "react"

export const LayoutHome = () => {
  return (
    <div className="bg-slate-700 h-screen">
      <div className="grid h-screen gap-4 grid-cols-12">
        <div className="col-span-3">
          <NavMain />
        </div>
        <div className="col-span-6 bg-red-500">
          <Outlet />
        </div>
        <div className="col-span-3 bg-red-500">
          <SiderBar/>
        </div>
      </div>
    </div>
  )
}
