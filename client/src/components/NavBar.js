import React from "react";

//libraries
import { NavLink, Link } from "react-router-dom";

//images
import instagram from "../images/header/instagram.png";
import youtube from "../images/header/youtube.png";
import facebook from "../images/header/facebook.png";
import twitter from "../images/header/twitter.png";
import magnifyingGlass from "../images/header/magnifying glass.png";

const NavBar = () => {
  return (
    <nav>
      <div className="NavBarTop">
        <div className="wrapper">
          <ul>
            <li>
              <ul>
                <li className="sprite phone">
                  <a href="tel:(225) 555-0118">(225) 555-0118</a>
                </li>
                <li className="sprite email">
                  <a href="mailto:hiphopLyrics@gmail.com">
                    hiphopLyrics@gmail.com
                  </a>
                </li>
              </ul>
            </li>
            <li>Follow Us and Stay tuned</li>
            <li>
              <ul>
                <li>Follow Us :</li>
                <li className="follow_sprite instagram">
                  <a href="https://www.instagram.com/">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li className="follow_sprite youtube">
                  <a href="https://www.youtube.com/">
                    <img src={youtube} alt="youtube" />
                  </a>
                </li>
                <li className="follow_sprite facebook">
                  <a href="https://www.facebook.com/">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="follow_sprite twitter">
                  <a href="https://twitter.com/home">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="NavBarBottom">
        <div className="wrapper">
          <ul>
            <li>
              <ul>
                <li className="logo">
                  <h1>
                    <a href="/">NEPALI RAP</a>
                  </h1>
                </li>
                <li className="lyrics">
                  <NavLink to="/">Lyrics</NavLink>
                </li>
                <li className="dropDownList">
                  <NavLink className="commonNavStyle" to="/">
                    Song
                  </NavLink>
                  <ul>
                    {[1, 2, 3].map((link, id) => (
                      <li key={id}>
                        <a href="/">{link}</a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="artist">
                  <NavLink to="/">Artist</NavLink>
                </li>
                <li>
                  <NavLink to="/">Video</NavLink>
                </li>
                <li className="contact">
                  <NavLink to="/">Contact</NavLink>
                </li>
                <li className="blog">
                  <NavLink to="/">Blog</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                {true ? (
                  <li className="commonNavStyle consumersTool login_and_register">
                    Login / Register
                  </li>
                ) : (
                  <li className="commonNavStyle consumersTool logout">
                    logout
                  </li>
                )}
                <li className="consumersTool search">
                  <Link className="commonNavStyle" to="/">
                    <img src={magnifyingGlass} alt="search" />
                  </Link>
                </li>
                <li className="consumersTool buy">
                  <Link className="commonNavStyle" to="/">
                    {1}
                  </Link>
                </li>
                <li className="consumersTool loved">
                  <Link className="commonNavStyle" to="/">
                    {1}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
