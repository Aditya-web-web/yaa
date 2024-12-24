import "./HideSideBar.css"
import home from "./Home.png"
import shorts from "./Shorts.png"
import subscriptions from "./Subscriptions.png"
import yours from "./Yours.png"


export default function HideSideBar() {
    return (
        <div id="hide">
            <div>
                <img src={home} id="imgh1" />
                <p id="ph1">Home</p>
            </div>
            <div>
                <img src={shorts} id="imgh2" />
                <p id="ph2">Shorts</p>
            </div>
            <div>
                <img src={subscriptions} id="imgh3" />
                <p id="ph3">Subscriptions</p>
            </div>
            <div>
                <img src={yours} id="imgh4"/>
                <p id="ph4">You</p>
            </div>
        </div>
    )
}