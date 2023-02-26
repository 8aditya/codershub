import React from "react"
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

function Rightbar({profile}){

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/birthday.png" alt="" />
                    <span className="birthdayText"><b>pola foster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img src="/assets/Ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map( (u) => {
                       return <Online key={u.id} user={u}/>
                    })}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">city:</span>
                    <span className="rightbarInfoValue">New-york</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/steve.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">steve rogers</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/bruce.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">bruce banner</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/peterQuill.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Peter Quill</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/peterParker.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Peter parker</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/gamora.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Gamora</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/Thor.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Odinson Thor</span>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightBar />}
            </div>
        </div>
    )
}

export default Rightbar