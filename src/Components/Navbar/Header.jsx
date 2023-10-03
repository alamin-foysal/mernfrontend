import React, { useState } from "react";
import { FaSun, FaFreeCodeCamp } from "react-icons/fa";
import "../Navbar/headers.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const [mode, setMode] = useState({
    backgroundColor: "transparent",
    transition: " all .6s linear",
  });

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 10) {
      setMode({ ...mode, backgroundColor: "#a07092" });
    } else {
      setMode({ ...mode, backgroundColor: "transparent" });
    }
  });

  const nightmode = () => {
    if (mode.backgroundColor === "#905C37") {
      setMode({ backgroundColor: "#1A1F23" });
      document.body.style.background = "black";
      setLight(false);
    } else {
      setMode({ backgroundColor: "#905C37" });
      document.body.style.background = "white";
      setLight(true);
    }
  };
  // const [scrolle, setScrolle] = useState({
  //   backgroundColor: "transparent",
  // });
  // window.onscroll = function () {
  //   if (document.documentElement.scrollTop > 10) {
  //     setScrolle({ backgroundColor: "#648523" });
  //   } else {
  //     setScrolle({ backgroundColor: "transparent" });
  //   }
  // };

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="navmenu fixed-top" style={mode}>
              <div className="brandname">
                <NavLink to="/" className="logo"> 
                  AdDa
                  </NavLink>
              </div>
              <nav>
                <ul className={click ? "nave-menu show" : "nave-menu"}>
                  <li onClick={() => setClick(false)}>
                    <NavLink className="a" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li onClick={() => setClick(false)}>
                    <NavLink className="a" to="/product">
                      Products
                    </NavLink>
                  </li>
                  <li onClick={() => setClick(false)}>
                    <NavLink className="a" to="/deshbord">
                      Deshbord
                    </NavLink>
                  </li>
                  <li onClick={() => setClick(false)}>
                    <NavLink className="a" to="/AboutMe">
                      AboutMe
                    </NavLink>
                  </li>
                  <li onClick={() => setClick(false)}>
                    <NavLink className="a" to="/Contact">
                      Order Now
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="night" onClick={nightmode}>
                {click ? <FaSun color="warning" /> : <FaFreeCodeCamp />}
              </div>

              <div className="menu">
                <div className="menu-icon" onClick={() => setClick(!click)}>
                  {click ? <FaSun color="warning" /> : <FaFreeCodeCamp />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
