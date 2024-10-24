import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import tradehive from "../Assets/TradeHive.png"; //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-section">
      <div className="box-container">
        <div className="box">
          <h2>Quick Links</h2>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} className="icon" /> home
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} className="icon" /> services
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} className="icon" /> About
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} className="icon" /> reviews
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} className="icon" /> contact us
          </a>
        </div>
        <div className="box">
          <h2>Contact Info</h2>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} className="icon" /> +000-000-0000
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} className="icon" /> +111-111-1111
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
            TradeHive@gmail.com
          </a>
        </div>
        <div className="boxNewsletter">
          <h2>News Letter</h2>
          <form action="">
            <label for="subscribe">subscribe for latest updates</label>
            <input
              type="email"
              name="subscribe"
              placeholder="enter your email"
              id=""
              className="box"
            />
            <input type="submit" value="subscribe" className="btn" />
          </form>
        </div>
      </div>
      <div className="social-links">
        <a href="#" className="btn">
          <FontAwesomeIcon icon={faFacebookF} className="socialbtn" />
        </a>
        <a href="#" className="btn">
          <FontAwesomeIcon icon={faInstagram} className="socialbtn" />
        </a>
        <a href="#" className="btn">
          <FontAwesomeIcon icon={faTwitter} className="socialbtn" />
        </a>
        <a href="#" className="btn">
          <FontAwesomeIcon icon={faTelegram} className="socialbtn" />
        </a>
        <a href="#" className="btn">
          <FontAwesomeIcon icon={faLinkedin} className="socialbtn" />
        </a>
      </div>
      <hr></hr>
      <div className="credit">
        <p>
          ©<span>TradeHive</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
