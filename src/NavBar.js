import "./NavBar.css"
import logo from "./ytlogo.png"
import create from "./create.png"
import notifys from "./notifys.png"
import signin from "./signin.png"

export default function NavBar({toggling}) {

    function redirect(){
        window.location.href = "http://localhost:3000/";
    }

    return (
        <div id="navbar">
            <div id="navbar1">
                <div><i className="fa-solid fa-bars" onClick={toggling}></i></div>
                <div><img src={logo} onClick={redirect}/></div>
            </div>
            <div>
                <div>
                    <input placeholder="Search"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div><i className="fa-solid fa-microphone"></i></div>
            </div>
            <div>
                <div><img src={create} id="a1"></img></div>
                <div><img src={notifys} id="a2"></img></div>
                <div><img src={signin} id="a3"></img></div>
            </div>
        </div>
    )
}
