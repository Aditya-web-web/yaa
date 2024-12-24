import NavBar from "./NavBar";
import SideBar from "./SideBar";
import HideSideBar from "./HideSideBar";
import { useState } from "react"
import Content from "./Content";
export default function Main(){

    let [toggle,setToggle] = useState(true)

    function toggling(){
        setToggle((prev) => !prev)
    }

    return(
        <div>
           <NavBar toggling={toggling}/>
           {toggle ? <SideBar/> : <HideSideBar/>} 
           <Content toggle={toggle}/>
        </div>
    )
}