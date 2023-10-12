import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../Images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);


  return (
    <div classname="main-container">
      <div className="about-profile-container">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
          <Link to={"/about"} >
            <button
              className="about-profile-button2"
              onClick={() => setShow(false)}
            >
              Hide My Profile
            </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button1"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>

      
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>VILLA</span> healthy
            meal"
          </h4>
        </div>
       
       
        <div className="about-right">
          <img src={food} alt="Food " />
        </div>
      </div>
    </div>
  );
};

export default About;
