import { IconType } from "react-icons";
import Link from "next/link";

interface AdminSidebarItemsProps {
    selected?: boolean;
    name:string;
    icon: IconType;
    url:string;
}


const AdminSidebarItems:React.FC<AdminSidebarItemsProps> = ({selected,name,icon:Icon ,url}) => {
  return (
    <Link className={`curser-pointer flex items-center gap-2 ${selected ? "text-black font-bold" : "text-slate-500 font-medium"}`} href={url}>
        <Icon  size={25}/>
        <div>{name}</div>
    </Link>
  )
}

export default AdminSidebarItems