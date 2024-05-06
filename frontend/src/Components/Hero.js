import React, { useEffect, useState } from "react";
import Video from "../Assets/trade.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    // navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Empowering Investors</p>
          <h2 className="text-title">
          Navigate the dynamic world of financial markets and achieve your investment goals
          </h2>
          {/* <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p> */}
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            {/* <FontAwesomeIcon icon={faRegistered} />  */}
            Register
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>4+</p>
              <p>Years</p>
            </div>

            {/* <div className="text-stats-container">
              <p>20+</p>
              <p>Awards</p>
            </div> */}

            <div className="text-stats-container">
              <p>200+</p>
              <p>Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          {/* <img className="hero-image1" src={Doctor} alt="Doctor" /> */}
          <video className="hero-image1" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
