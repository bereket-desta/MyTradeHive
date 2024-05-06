import React from "react";
import InformationCard from "./InformationCard";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Services</span>
        </h3>
        {/* <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p> */}
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Support"
          description="We provide tools, knowledge, and support to help you succeed in stock trading and investments."
          icon={faPhone}
        />

        <InformationCard
          title="Expert Analysis"
          description="Our team of experts provides in-depth analysis to help you make informed investment decisions."
          icon={faPhone}
        />

        <InformationCard
          title="Secure Investment"
          description="We prioritize the security of your investments and ensure a safe trading environment."
          icon={faPhone}
        />
      </div>
    </div>
  );
}

export default Info;
