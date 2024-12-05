import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { SiDiscourse } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux"; 

const Sidebar = () => {
  let toggleMenuOpen = useSelector((store) => store.toggle.toggleMenuOpen)
  if(!toggleMenuOpen) return null
  return (
    <div className="shadow-xl w-52 py-4 h-auto px-10 text-xl">
      <ul className="pt-6">
        <li className="flex items-center gap-3"><IoMdHome />Home</li>
        <li className="flex items-center gap-3"><SiYoutubeshorts />Shorts</li>
        <li className="flex items-center gap-3"><BiSolidVideos />Videos</li>
        <li className="flex items-center gap-3"><MdOutlineLiveTv />Live</li>
      </ul>
      <h2 className="font-bold pt-8 pb-2">Subscription</h2>
      <ul>
        <li className="flex items-center gap-2"><MdSubscriptions />Sathiyam News</li>
        <li className="flex items-center gap-2"><MdSubscriptions />Freecode camp</li>
        <li className="flex items-center gap-2"><MdSubscriptions />Sony South</li>
        <li className="flex items-center gap-2"><MdSubscriptions />News 7</li>
      </ul>
      <h2 className="font-bold pt-8 pb-2">Explore</h2>
      <ul>
        <li className="flex items-center gap-"><IoMdTrendingUp />Trending</li>
        <li className="flex items-center gap-2"><FaBagShopping />Shopping</li>
        <li className="flex items-center gap-2"><IoMusicalNotes />Music</li>
        <li className="flex items-center gap-2"><SiDiscourse />Courses</li>
        <li className="flex items-center gap-2"><MdOutlineLiveTv />Live</li>
      </ul>
    </div>
  )
}

export default Sidebar
