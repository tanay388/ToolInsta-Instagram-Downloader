import { Container } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
import { APP_NAME } from "../../constants/string";
import LanguageDropdown from "../dropdowns/LanguageDropDown";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const nav = useNavigate();
  return (
    <header>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "10px 0px",
          }}
        >
          <img
            src={Logo}
            alt={APP_NAME}
            width={120}
            style={{ cursor: "pointer" }}
            onClick={() => {
              nav("/");
            }}
          />

          <LanguageDropdown />
        </div>
      </Container>
    </header>
  );
};

export default HeaderBar;
