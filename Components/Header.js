import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import neone from "../Images/newlogo2-removebg.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);  
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const [isLoggedIn, setIsLoggedIn] = useState(!!user); // Initialize based on user data
  useEffect(() => {
    // Use an effect to watch for changes in the 'user' object
    setIsLoggedIn(!!user); // Update 'isLoggedIn' when 'user' changes
  }, [user]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Clear localStorage

        // Set isLoggedIn to false
        setIsLoggedIn(false);

        // Navigate to the desired page (e.g., '/')
        navigate("/");
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={neone} alt="Food vila" title="Food vila" />
      </a>
      {isLoggedIn ? (
       
          <h1 className="user-title">Hello <span>{user.split('@')[0]}</span></h1>
       
      ) : null}
      <div className={`nav-items ${isMenuOpen ? "responsive" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          
          
          
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeMenu}>
              Cart Items - {cartItems.length}
            </Link>
          </li>
          <li>
            <Link to="/instamart" onClick={closeMenu}>
              Instamart
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => {
                  setIsLoggedIn(false);
                  closeMenu();
                  handleSignOut();
                  dispatch(removeUser());
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>

      <div>
        <button className="nav-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Header;
