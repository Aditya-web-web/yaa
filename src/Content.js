import "./Content.css"
import { useState, useEffect } from "react"
import a3 from "./icon.png"

export default function Content({ toggle }) {

    let key = "AIzaSyCUjR5lHWZECMPYywM-OiCliQlPT_10D1A"
    
    // Array of random video category IDs for variety
    const categories = ["0", "1", "2", "10", "17", "20"]; // Example categories, add more as needed
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${randomCategory}&key=${key}`;
               
    let [thumbnails, setThumbnails] = useState([])

    async function Call() {
        let response = await fetch(url)
        let finalResponse = await response.json()
        console.log(finalResponse)
        setThumbnails(finalResponse.items)
    }

    useEffect(() => { Call() },[])

    return (
        <div id={`content${toggle ? "expanded" : "collapsed"}`}>
            {thumbnails.map((thumbnail) => (
                <div key={thumbnail.id}>
                    <img src={thumbnail.snippet.thumbnails.standard.url} id="img1"/>
                    <div>
                        <img src={a3} id="img2" />
                        <div>
                            <b>{thumbnail.snippet.title}</b>
                            <p id="p1">{thumbnail.snippet.channelTitle}</p>
                            <p id="p2">{thumbnail.statistics.viewCount} &bull; 2 years ago</p>
                        </div>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}
