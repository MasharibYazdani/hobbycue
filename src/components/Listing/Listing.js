import React from "react";
import "./listing.css";
import addIcon from "./addIcon.png";
import people from "./people.png";
import place from "./place.png";
import product from "./product.png";
import program from "./program.png";

function Listing() {
  return (
    <div class="container text-center">
      <h1 className="heading m-2 p-2">
        {" "}
        <img src={addIcon} alt="" /> Add Your Listing
      </h1>
      <div class="row row-cols-2">
        <div class="col">
          <div className="div-1 mb-5">
            <h3 className="text-start">
              <img className="img-1 m-1 p-1" src={people} alt="" />
              People
            </h3>

            <p className="text-start">
              An Individual or Organization. Teacher, Coach, Professional or
              Online Seller. Company, Business or Association.
            </p>
          </div>
        </div>

        <div class="col ">
          <div className="div-2">
            <h3 className="text-start">
              <img className="m-1 p-1" src={place} alt="" />
              Place
            </h3>

            <p className="text-start">
              An Address. Classroom, Shop, Performance or Event Venue, Sports
              Arena, Play Area, Studio, School or Campus.
            </p>
          </div>
        </div>

        <div class="col ">
          <div className="div-3">
            <h3 className="text-start">
              <img className="m-1 p-1" src={product} alt="" />
              Product
            </h3>

            <p className="text-start">
              An Item that you can Book, Buy or Rent. Appointment, Ticket, or
              Voucher. Equipment, Instrument or Activity Kit.
            </p>
          </div>
        </div>

        <div class="col">
          <div className="div-4">
            <h3 className="text-start">
              <img className="m-1 p-1" src={program} alt="" />
              Program
            </h3>

            <p className="text-start">
              An Event with Venue and Date. Meetup, Workshop or Webinar.
              Exhibition, Performance or Competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
