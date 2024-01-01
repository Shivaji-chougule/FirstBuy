import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
          To Become a Complete Software Company with the Quality 
          performances and to develop success path for every industry's
          growth and progress.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow/>
            <div className="text">main road, aalandi phata, chakan, 410511</div>
          </div>
          <div className="c-item">
            <FaMobileAlt/>
            <div className="text">Phone:9145137580</div>
          </div>
          <div className="c-item">
            <FaEnvelope/>
            <div className="text">Email:shivajichouhule@gmail.com</div>
          </div>

        </div>
        <div className="col">
          <div className="title">Category</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
        </div>
        <div className="col">
        <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
        </div>
        <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        FASTBUY 2023 CREATED BY SHIVA.DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} alt=''/>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
