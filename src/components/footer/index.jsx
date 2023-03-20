import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0px",
    width: "100%",
  };

  const nav = useNavigate();

  return (
    <>
      <div style={footerStyle}>
        <p style={{ margin: "0" }}>© 2023 Tootlinsta. All Rights Reserved</p>
      </div>
      <div
        className="footer_bottom_bar"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="link-nav-bottom"
          onClick={() => {
            nav("/privacy");
          }}
        >
          Privacy Policy
        </div>
        <div
          className="link-nav-bottom"
          onClick={() => {
            nav("/tnc");
          }}
        >
          Terms & Condition
        </div>
        <div
          className="link-nav-bottom"
          onClick={() => {
            nav("/contact-us");
          }}
        >
          Contact Us
        </div>
      </div>
    </>
  );
}

export default Footer;
