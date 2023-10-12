import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Images/app_store.png";
import image2 from "../Images/play_store.jpg";
import { FaGithub } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoGmail}  from 'react-icons/bi';
import { Github_Link } from "../constants";
import {Linkedin_Link}  from "../constants";
import { Email_Link } from "../constants";
import {App_store} from "../constants"
import {play_store} from "../constants"



const Content1 = () => {
  return (
    <div className="content-container12">
      <h1>For a better experience, download the app now</h1>
      <div className="image-container12">
        <Link
          to={App_store}
          target="_blank"
        >
          {" "}
          <img src={image1} alt="appstore" className="appstore-img" />
        </Link>
        <Link
          to={play_store}
          target="_black"
        >
          {" "}
          <img src={image2} alt="playstore" className="playstore-img" />
        </Link>
      </div>
    </div>
  );
};

const Content2 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {
            <h3>
              Hey .... Thanks for using Food Villa <span></span>
            </h3>
          }{" "}
        </div>
        <div className="footer-text">{<h1>Food❤️Villa</h1>}</div>
      </div>
    </footer>
  );
};

const Content3 = () => {
  return (
    <div className="content-container">
      <div className="column C2">
        <h2>
          <b>Company</b>
        </h2>
        <Link  to="/ "  style={{ color: '#9A9B9E', fontWeight: "bolder" }}  >Careers</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Team</Link>
        <Link to="/   " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Swiggy One</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Swiggy Instamart</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Swiggy Genie</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>About</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>About</Link>
      </div>

      <div className="column C3">
        <h3>
          <b>Contact us</b>
        </h3>
        <Link to="/   " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Help & Support</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Partner with US</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Ride With Us</Link>
      </div>

      <div className="column C4">
        <h3>
          <b>Legal</b>
        </h3>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }} >Terms & Conditions</Link>
        <Link to="/   " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Cookie Policy</Link>
        <Link to="/  " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Privacy Policy</Link>
      </div>

      <div className="column C5">
        <h3>
          <b>We deliver to:</b>
        </h3>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Bangalore</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Hyderabad</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Delhi</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Mumbai</Link>
        <Link to="/ " style={{ color: '#9A9B9E', fontWeight: "bolder" }}>Pune</Link>
      </div>
    </div>
  );
};


const Content4 = () => {
  return (
    <div className="copy-container">
      <div className="left">
        <h1 className="copyright-txt">© 2023 Food Villa</h1>
      </div>

      <div className="right">
        <div className="social-icons">
          <Link><BiLogoInstagramAlt style={{ width: '40px', color: "white" }}/></Link>
          <Link to={Github_Link} target="_blank"><FaGithub style={{ width: '40px' ,color: "white" }}/></Link>
          <Link to={Linkedin_Link} target="_blank"><AiFillLinkedin  style={{ width: '40px',color: "white" }} /></Link>
          <Link to={Email_Link} target="_blank" ><BiLogoGmail style={{ width: '40px',color: "white" }}/></Link>
        </div>
      </div>
    </div>
  )
}







const Footer = () => {
  return (
    <React.Fragment>
      <Content1 />
     
      <Content3 />
      <Content4 />
      <Content2 />
     
      
    </React.Fragment>
  );
};

export default Footer;
