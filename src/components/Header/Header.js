import React from "react";
import "./header.css";
import logo from "./HobbyCueLogo.png";
import explore from "./Explore.png";
import notifcation from "./notification.png";
import bookmark from "./bookmark.png";
import cart from "./cart.png";
import searchIcon from "./iconSearch.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="search-content">
          <form className="d-flex ">
            <input
              className="rounded-start head-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="search-icon rounded-end p-2 text-white icons ">
              <img src={searchIcon} alt="" />
            </div>
          </form>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle m-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={explore} alt="" />
                Explore
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    People - Community
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Places - Venues
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Program - Events
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Products - Store
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Blogs
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle m-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={explore} alt="" />
                Hobbies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Hobbies
                  </a>
                </li>
              </ul>
            </li>

            <li className="m-2 mt-3 icons">
              <img src={bookmark} alt="" />
            </li>

            <li className="m-2 mt-3 icons">
              <img src={notifcation} alt="" />
            </li>

            <li className="m-2 mt-3 icons">
              {" "}
              <img src={cart} alt="" />
            </li>

            <li className="m-2">
              <button type="submit" className="btn sign-btn">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
