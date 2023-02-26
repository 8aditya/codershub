import React from "react"
import "./sidebar.css"
import {RssFeed,Chat,VideoCall,Group,Bookmark,QuestionAnswerRounded,School,Event,Book} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"
function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCall className="sidebarIcon"/>
                        <span className="sidebarListItemText">videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswerRounded className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <Book className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map( u => {
                        return <CloseFriend key={u.id} user={u}/>
                    })}
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar