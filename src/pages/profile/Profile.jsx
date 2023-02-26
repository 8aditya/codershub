import React from "react"
import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"

export default function Profile(){
    return (
    <>
    <Topbar />
   <div className="profile">
       <Sidebar />
       <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="assets/person/post/shawarma.jpg" alt="" />
                    <img className="profileUserImg" src="assets/person/tony.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Tony Stark</h4>
                    <span className="profileInfoDesk">Genius, Billionaire,Playboy , philanthropist</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
            
       </div>
       
       
   </div>
   
   </>
    )
}