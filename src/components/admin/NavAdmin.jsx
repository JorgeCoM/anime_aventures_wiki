import { navAdminData } from "../../data/NavData"
import { NavAdminItem } from "./NavAdminItem"

export const NavAdmin = () => {
    return (
        <div className="h-screen">
            {
                navAdminData.map(item => {
                    return <NavAdminItem key={item.option} item={item} />
                })
            }
        </div>
    )
}
