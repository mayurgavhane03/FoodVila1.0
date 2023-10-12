import { Component } from "react";
import github from "../Images/social-logo/github.png";
import insta from "../Images/social-logo/insta.png";
import linkdin from "../Images/social-logo/linkedin.png";
import gmail from "../Images/social-logo/gmail.png";

import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Instagram_Link,
} from "../constants";

class SocialProfileClass extends Component {
  render() {
    return (

      <div className="social-media-container">
        <a href={Instagram_Link} className=" instagram" target="_blank">
          <img src={insta} alt="{linkdin}"/>
        </a>
        <a href={Linkedin_Link} className="linkdin" target="_blank">
            <img src={linkdin} />
        </a>
        <a href={Github_Link} className=" github" target="_blank">
          <img src={github} />
        </a>
        <a href={Email_Link} className="email" target="_blank">
            <img src={gmail} />
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
