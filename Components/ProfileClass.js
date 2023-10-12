import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../constants";
import "../src/index.css";
import SocialProfileClass from "./SocialProfileClass";
import myprofile from "../Images/myprofile/myprofile.jpeg"; // Fix the import path

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Mayur",
        bio: "Full stack Web Developer",
      },
    };
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <div className="profile-user-card">
            <img className="profile-user-img" src={myprofile} alt="My Profile" />
            <h2>Mayur</h2>
            <h2>{userInfo.bio}</h2> {/* Use userInfo.bio here */}
            <SocialProfileClass />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Profile;
