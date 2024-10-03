"use client";

import AdminSidebarItems from "./AdminSidebarItems"
import { MdDashboard,MdBorderOuter, MdOutlineCreate } from "react-icons/md"
import { usePathname } from "next/navigation"

const AdminSidebar = () => {
    const pathname = usePathname();
    const adminPanel = [
        {
            name: "Özet",
            icon: MdOutlineCreate,
            url: "/admin",
        },
        {
            name: "Ürün olustur",
            icon:MdDashboard,
            url: "/admin/create",
        },
        {
            name: "Siparişlerim",
            icon: MdBorderOuter,
            url: "/admin/orders",
        }
    ]

  return (
    <div className="w-1/5 border-r h-screen">
        <div>
            {adminPanel.map((admin, index) => (
                <div key={index} className="p-2 border-b">
                    <AdminSidebarItems  key={index}  selected={pathname == admin.url} icon={admin.icon} name={admin.name} url={admin.url} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default AdminSidebar