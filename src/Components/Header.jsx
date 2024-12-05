import { useDispatch } from "react-redux"
import {toggleMenu} from '../Utils/ToggleSlice'
 
const Header = () => {
  let dispatch = useDispatch()
  let toggleMenuHandler = ()=>{
     dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col items-center shadow-md p-2">
      <div className="flex col-span-1">
        <img onClick={()=> toggleMenuHandler()} className="h-11" src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="menu-icon"/>
        <img className="h-11 ms-3" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" />
      </div>
      <div className="col-span-10 text-center">
        <input type="text" className="w-1/2 border border-gray-400 p-1 rounded-s-3xl"/>
        <button className="border border-gray-400 p-1 rounded-e-3xl bg-gray-100 pe-3">Search</button>
      </div>
      <div className="col-span-1">
        <img className="h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/10110/10110782.png" alt="profile-icon" />
      </div>
    </div>
  )
}

export default Header
