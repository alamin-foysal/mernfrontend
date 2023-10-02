import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Hero from "../Hero/Hero";

const Userdeshbord = () => {
  return (
    <>
      <div className="container-fluid  my-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <div
              className="bg-success my-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                width: "100%",
                height: "2rem",
              }}
            >
              <NavLink to="sliderdesh" style={{ color: "wheat",textDecoration:'none'}}>
                Sliders
              </NavLink>
              <NavLink to="topdesh" style={{ color: "wheat",textDecoration:'none' }}>
                Top Products
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userdeshbord;
