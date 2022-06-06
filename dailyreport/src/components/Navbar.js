import React, { useEffect } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const Navbar = () => {
  function animation() {
    const tabsNewAnim = $("#navbarSupportedContent");
    const activeItemNewAnim = tabsNewAnim.find(".active");
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });

    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      const activeWidthNewAnimHeight = $(this).innerHeight();
      const activeWidthNewAnimWidth = $(this).innerWidth();
      const itemPosNewAnimTop = $(this).position();
      const itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <img className="imageLogo" src="Logo_EIA.png"></img>
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Plataforma de Gestión para Mantenimiento Aulas
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          className="fas fa-bars
        text-white"
        ></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/chromebooks" exact>
              <i className="fa fa-laptop"></i>Chromebooks
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/plantas" exact>
              <i className="fa fa-building"></i>Plantas
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/inventario" exact>
              <i className="fa fa-server"></i>Inventario
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
