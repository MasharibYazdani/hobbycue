import React from "react";
import "./body.css";
import groupPhoto from "./GroupPic.png";
import google from "./Google.png";
import facebook from "./Facebook.png";

function Body() {
  return (
    <>
      <div className="body d-flex justify-content-around">
        <div className="left w-50 m-5 ">
          <div className="left-text">
            <h1 className="text-start fst-italic">
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#8064A2" }}>passion</span>
            </h1>

            <p className="text-start mt-4">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>

            <p className="text-start">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          <div className="left-photo">
            <img src={groupPhoto} alt="" />
          </div>
        </div>
        <div className="right mt-5 ">
          <div className="d-flex justify-content-start">
            <h2 className="me-3 hov">Sign In</h2>
            <h2 className="ms-2 hov">Join In</h2>
          </div>

          <div className="googleFB mt-4 p-2 fw-bold position-relative hov ">
            <div className="position-absolute start-2">
              <img src={google} alt="" />
            </div>
            Continue with Google
          </div>

          <div className="googleFB mt-4 p-2 fw-bold position-relative hov">
            <div className="position-absolute start-2">
              <img src={facebook} alt="" />
            </div>
            Continue with Facebook
          </div>

          <div className="fw-bold mt-4">
            {" "}
            <hr />
            Or connect with
          </div>

          <div className="mt-3">
            <input className="form-control" type="email" placeholder="Email" />
          </div>
          <div className="mt-3">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="mt-3 d-flex justify justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>

            <div className="hov">Forgot password?</div>
          </div>

          <div className="googleFB mt-4 p-2 fw-bold hov">Continue</div>
        </div>
      </div>
    </>
  );
}

export default Body;
