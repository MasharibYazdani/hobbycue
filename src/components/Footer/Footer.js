import React from "react";
import "./footer.css";
import footerPic from "./GroupPiic.png";
import fb from "./fb.png";
import twitter from "./twit.png";
import insta from "./insta.png";
import pinterest from "./pinterest.png";
import google from "./google.png";
import youtube from "./youtube.png";
import tele from "./tele.png";
import mail from "./mail.png";

function Last() {
  return (
    <div className="last">
      <div className="last-head">
        <h1 className="fst-italic">
          Your <span style={{ color: "#8064A2" }}>Hobby</span>, Your{" "}
          <span style={{ color: "#0096C8" }}>Community...</span>
        </h1>
        <button type="submit" className="btn btn-primary last-btn mt-5">
          Get Started
        </button>
      </div>
      <div className="last-img">
        <img src={footerPic} alt="" />
      </div>
      <div className="d-flex justify justify-content-around mt-4">
        <div>
          <p className="fw-bold">Hobbycue</p>
          <ul className="list-inline">
            <li className="foot-hov">About Us</li>
            <li className="foot-hov">Our Services</li>
            <li className="foot-hov">Work with Us</li>
            <li className="foot-hov">FAQ</li>
            <li className="foot-hov">Contact Us</li>
          </ul>
        </div>

        <div>
          <p className="fw-bold">How Do I</p>
          <ul className="list-inline">
            <li className="foot-hov">Sign Up</li>
            <li className="foot-hov">Add a Listing</li>
            <li className="foot-hov">Claim Listing</li>
            <li className="foot-hov">Post a Query</li>
            <li className="foot-hov">Add a Blog Post</li>
            <li className="foot-hov">Other Queries</li>
          </ul>
        </div>

        <div>
          <p className="fw-bold">Quick Links</p>
          <ul className="list-inline">
            <li className="foot-hov">Listings</li>
            <li className="foot-hov">Blog Posts</li>
            <li className="foot-hov">Shop / Store</li>
            <li className="foot-hov">Community</li>
          </ul>
        </div>

        <div>
          <p className="fw-bold text-start">Social Media</p>
          <div>
            <img className="m-1 foot-hov" src={fb} alt="" />
            <img className="m-1 foot-hov" src={twitter} alt="" />
            <img className="m-1 foot-hov" src={insta} alt="" />
            <img className="m-1 foot-hov" src={pinterest} alt="" />
            <img className="m-1 foot-hov" src={google} alt="" />
            <img className="m-1 foot-hov" src={youtube} alt="" />
            <img className="m-1 foot-hov" src={tele} alt="" />
            <img className="m-1 foot-hov" src={mail} alt="" />
          </div>

          <div className="mt-4">
            <p className="fw-bold text-start">Invite Friends</p>
            <div className="search-content">
              <form className="d-flex ">
                <input
                  className="rounded-start foot-search"
                  type="search"
                  placeholder="Email ID"
                  aria-label="Search"
                />
                <div className="search-icon rounded-end p-1 text-white foot-hov">
                  Invite
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <p className="fw-bold mt-2">© Purple Cues Private Limited</p>
      </div>
    </div>
  );
}

export default Last;
