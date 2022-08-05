import { useSession } from 'next-auth/react'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import {
    CalenderIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid"
import SidebarRow from './SidebarRow';


function Sidebar() {
    const { data: session, loading} = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow src={session.user.image} title={session.username} />
        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon} title="Groups" />
        <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace" />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
        <SidebarRow Icon={CalenderIcon} title="Events" />
        <SidebarRow Icon={ClockIcon} title="Memories" />
        <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}

export default Sidebar