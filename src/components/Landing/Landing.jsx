import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import app_display from "../../assets/app_display.png";
import visa from "../../assets/visa.png";
import federal from "../../assets/federal.png";
import icici from "../../assets/icici.png";
import sbi from "../../assets/sbi.png";
import hdfc from "../../assets/hdfc.png";
import bankacc from "../../assets/bankacc.svg";
import appview from "../../assets/appview.svg";
import savings from "../../assets/savings.svg";
import rewards from "../../assets/rewards.svg";
import kyc from "../../assets/kyc.svg";
import signup from "../../assets/signup.svg";
import mobilebank from "../../assets/mobilebank.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import "./landing.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="landing">
      <div className="mainscreen">
        <div className="tagline">
          <h1>Banking must be smarter</h1>
          <h5>We help you get complete control over your money.</h5>
          <Button variant="contained">Download Now !</Button>
        </div>
        <div className="landing_img">
          <img src={app_display} alt="app display" />
        </div>
      </div>
      <div className="partners">
        <h2>We work with trusted partners</h2>
        <div className="images">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={visa} alt="visa" />
            <img src={icici} alt="icici" />
            <img src={hdfc} alt="hdfc" />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-1.2em",
            }}
          >
            <img src={sbi} alt="sbi" />
            <img src={federal} alt="federal" />
          </div>
        </div>
      </div>
      <div className="features">
        <h2>Accounting made simple</h2>
        <div className="feat_body" style={{ marginTop: "7em" }}>
          <div className="feat_container" data-aos="fade-up" data-aos-delay="0">
            <img src={bankacc} alt="app display" />
            <p>Open your neobanking account in merely 2 minutes</p>
          </div>
          <div
            className="feat_container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={appview} alt="app display" />
            <p>Get a one-app view of all your existing accounts in one place</p>
          </div>
          <div
            className="feat_container"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={rewards} alt="app display" />
            <p>
              get reward tokens after each transfer, order products with the
              tokens received
            </p>
          </div>
          <div
            className="feat_container"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={savings} alt="app display" />
            <p>Fuel your savings with automated notifications & reminders</p>
          </div>
        </div>
      </div>
      <div className="steps">
        <h2>3 easy steps to get you started</h2>
        <Slider
          aria-label="Temperature"
          step={50}
          marks
          min={0}
          max={100}
          style={{ margin: "8em 0em 3em 10em", width: "74%" }}
        />
        <div className="feat_body">
          <div className="feat_container" data-aos="fade-up" data-aos-delay="0">
            <img src={signup} alt="signup" />
            <p>Open your neobanking account in merely 2 minutes</p>
          </div>
          <div
            className="feat_container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={kyc} alt="kyc" />
            <p>Get a one-app view of all your existing accounts in one place</p>
          </div>
          <div
            className="feat_container"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={mobilebank} alt="mobilebank" />
            <p>
              get reward tokens after each transfer, order products with the
              tokens received
            </p>
          </div>
        </div>
      </div>
      <div className="faq">
        <h2>FAQ</h2>
        <div className="faq_body">
          <div>
            <Accordion className="faq_q" data-aos="fade-up" data-aos-delay="0">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="faq_q"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>{" "}
            <Accordion
              className="faq_q"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 3
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
