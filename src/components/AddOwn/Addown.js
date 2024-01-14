import React from "react";
import "./addown.css";
import addIcon from "./addIcon.png";

function Addown() {
  return (
    <div className="addown mt-5">
      <h1 className="heading m-2 p-2">
        {" "}
        <img src={addIcon} alt="" /> Add your own
      </h1>

      <p className="m-2 p-2">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or
        event tickets? Or, you know someone who should be on hobbycue? Go ahead
        and Add your Own page
      </p>

      <button type="submit" className="btn btn-add m-2 p-2">
        Add new
      </button>
    </div>
  );
}

export default Addown;
