import React from "react"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
import "./topbar.css"
function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">codersHub</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="search for friend,post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                    </div>
                    <span className="topbarIconBadge">
                        1
                    </span>
                    <div className="topbarIconItem">
                        <Chat />
                    </div>
                    <span className="topbarIconBadge">
                        2
                    </span>
                    <div className="topbarIconItem">
                        <Notifications />
                    </div>
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
                <img src="assets/person/1.jpg" alt="" className="topbarImg" />
            </div>

        </div>
    )
}

export default Topbar