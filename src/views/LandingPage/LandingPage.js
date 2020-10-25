import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/expendIcon.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="main-container">
      <div className="Banner">
        <div className="TopNav">
          <img src={Icon} alt="logo" />{" "}
          <h2>
            Manage
            <br />
            Expenditure
          </h2>
          <a href="#contact">Contact</a>
          <a href="#team">About Us</a>
          <a href="#offer">Services</a>
          <Link to="/manager">START</Link>
        </div>
        <div className="Description">
          <h1>
            MANAGING EXPENDITURES IS JUST LIKE CHESS, PONDER OVER EACH STEP
            WISELY WITH US.
          </h1>
          <Link to="/manager">
            <button className="management-btn">START MANAGEMENT</button>
          </Link>
        </div>
      </div>

      <div id="offer"></div>
      <br />
      <div className="Offer">
        <h2>SERVICES</h2>
        <div className="OfferBoxContainer">
          <div className="OfferBox">
            <h2>ORGANIZATION'S GROWTH</h2>
            <br />
            <p>
              As once said "Growth is never by mere chance, it is the result of
              forces working together", we are willing to do out utmost to
              combine our forces with yours for the{" "}
              <b>CONTINUOUS DEVELOPMENT</b> of the organization{" "}
            </p>
          </div>
          <div className="OfferBox">
            <h2>SUSTAINABILITY</h2>
            <br />
            <p>
              "Progress is measured by the speed at which we destroy the
              conditions that sustain life", this is why we are here to always
              help in <b>OVERCOMING THE LIMITING FACTORS</b> to your expenditure
              management
            </p>
          </div>
          <div className="OfferBox">
            <h2>PERFORMANCE</h2>
            <br />
            <p>
              With this quality, we are poised to{" "}
              <b> INCREASING THE PERFORMANCE </b> of the organization at large,
              making the firm meet its goals.
            </p>
          </div>
          <div className="OfferBox">
            <h2>FULFILLMENT</h2>
            <br />
            <p>
              This is the inner satisfaction that's gotten when our goals are
              being disbursed into the organization, this,{" "}
              <b>WORDS CAN'T EXPLAIN, ONLY A TRIAL CAN.</b>
            </p>
          </div>
        </div>
        <Link to="/manager">
          <button className="management-btn">START MANAGEMENT</button>
        </Link>
      </div>

      <div className="Team" id="team"></div>
      <div className="Team">
        <h2>ABOUT US</h2>
        <div className="TeamBoxContainer">
          <div className="TeamBox">
            <img
              src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
              alt=""
            />
            <h2>DEV. AFOLABI</h2>
            <br />
            <span>Creator</span>
          </div>
          <div className="TeamBox">
            <img
              src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
              alt=""
            />
            <h2>DEV. AMON</h2>
            <br />
            <span>Creator</span>
          </div>
          <div className="TeamBox">
            <img
              src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
              alt=""
            />
            <h2>DEV. IDRIS</h2>
            <br />
            <span>Creator</span>
          </div>
          <div className="TeamBox">
            <img
              src="https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png"
              alt=""
            />
            <h2>DEV. KOLAPO</h2>
            <br />
            <span>Creator</span>
          </div>
        </div>
      </div>

      <div className="Contact" id="contact">
        <div className="ContactCenter">
          <h2>CONTACT US</h2>
        </div>

        <div className="container">
          <form>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            ></textarea>
            <div className="ContactCenter">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
