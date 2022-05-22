import React from "react";

//images
import facebook from "../images/footer/facebook.jpg";
import instagram from "../images/footer/instagram.jpg";
import twitter from "../images/footer/twitter.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <div className="wrapper">
          <ul>
            <li className="logo">
              <h1>
                <a href="/">NEPALI RAP</a>
              </h1>
            </li>
            <li>
              <ul className="messengers">
                <li className="facebook">
                  <a href="/">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li className="instagram">
                  <a href="/">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="/">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerMiddle">
        <div className="wrapper">
          <ul>
            <li>
              <ul className="column artist">
                <li className="liTitle">Artist</li>
                <li>
                  <a href="/">Biography</a>
                </li>
                <li>
                  <a href="/">Videos</a>
                </li>
                <li>
                  <a href="/">Lyrics</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="column albums">
                <li className="liTitle">Albums</li>
                <li>
                  <a href="/">Most sold</a>
                </li>
                <li>
                  <a href="/">Most streamed</a>
                </li>
                <li>
                  <a href="/">Lastest released</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="column photos">
                <li className="liTitle">Photos</li>
                <li>
                  <a href="/">Posters</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Gallery</a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="column videos">
                <li className="liTitle">Videos</li>
                <li>
                  <a href="/">Youtube</a>
                </li>
                <li>
                  <a href="/">Latest releases</a>
                </li>
                <li>
                  <a href="/">Most viewed</a>
                </li>
              </ul>
            </li>
            <li>
              <ul className="column getInTouch">
                <li className="liTitle">Get In Touch</li>
                <li>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <button>Subscribe</button>
                  <br />
                  <label htmlFor="email">Get featured on this page.</label>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <div className="wrapper">
          <p>Made By Nepali Rap. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
