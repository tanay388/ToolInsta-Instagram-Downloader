import React from "react";
import { getStringInLocalLanguage } from "../../constants/string";
import { Container } from "@mui/material";
import { PRIMARY_COLOR_LIGHT } from "../../constants/colors";
import DisplayLogo from "../../assets/favicon.jpg";
import OgPosts from "../../assets/og_posts.jpg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FixedAbout = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage("about_heading")[0]}
      </h2>

      <img
        src={OgPosts}
        style={{ maxWidth: "100%", maxHeight: "300px", margin: "10px 0px" }}
        alt=" "
      />

      {getStringInLocalLanguage("about_content").map((item, indx) => {
        return (
          <p style={{ textAlign: "left", marginBottom: "10px" }} key={indx}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export const PageDescription = ({ pageName }) => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage(pageName + "_desc_heading")[0]}
      </h2>

      {getStringInLocalLanguage(pageName + "_desc_content").map(
        (item, indx) => {
          return (
            <p style={{ textAlign: "left", marginBottom: "10px" }} key={indx}>
              {item}
            </p>
          );
        }
      )}
    </div>
  );
};
const WhyUseToolInsta = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage("why_toolinsta_heading")[0]}
      </h2>

      {getStringInLocalLanguage("why_toolinsta_content").map((item, indx) => {
        return (
          <p style={{ textAlign: "left", marginBottom: "10px" }} key={indx}>
            {item}
          </p>
        );
      })}
      <img
        src={DisplayLogo}
        alt=""
        style={{ maxHeight: "200px", maxWidth: "100%" }}
      />
    </div>
  );
};

const FeaturesToolInsta = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage("features_heading")[0]}
      </h2>

      {getStringInLocalLanguage("features_content").map((item, indx) => {
        if (indx % 2 === 0) {
          return (
            <p style={{ textAlign: "left" }}>
              <strong>{item} :</strong>
            </p>
          );
        } else
          return (
            <p style={{ textAlign: "left", marginBottom: "10px" }} key={indx}>
              {item}
            </p>
          );
      })}
    </div>
  );
};

export const FAQToolInsta = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage("faq_heading")[0]}
      </h2>

      {getStringInLocalLanguage("faq_content").map((item, indx) => {
        if (indx % 2 === 0) {
          return (
            <Accordion key={indx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FF5B59" }} />}
              >
                <strong>{item} :</strong>
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ textAlign: "left", marginBottom: "10px" }}>
                  {getStringInLocalLanguage("faq_content")[indx + 1]}
                </p>
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

const WhyChooseToolInsta = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage("why_choose_tootlinsta_heading")[0]}
      </h2>

      {getStringInLocalLanguage("why_choose_tootlinsta_content").map(
        (item, indx) => {
          if (indx % 2 !== 0) {
            return (
              <p style={{ textAlign: "left" }}>
                <strong>{item} :</strong>
              </p>
            );
          } else
            return (
              <p style={{ textAlign: "left", marginBottom: "10px" }} key={indx}>
                {item}
              </p>
            );
        }
      )}
    </div>
  );
};

const HowToDownloadToolInsta = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}>
      <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
        {getStringInLocalLanguage("how_to_download_heading")[0]}
      </h2>

      {getStringInLocalLanguage("how_to_download_content").map((item, indx) => {
        if (indx % 2 === 1) {
          return (
            <p key={indx} style={{ textAlign: "left" }}>
              <strong>{item}</strong>
            </p>
          );
        }
        return (
          <p style={{ marginBottom: "10px", textAlign: "left" }} key={indx}>
            {item}
          </p>
        );
      })}
      <img
        src="https://saveinsta.app/imgs/copy-link-min.jpg"
        alt="how to download"
        style={{ maxHeight: "300px", maxWidth: "100%" }}
      />
    </div>
  );
};
const AboutSection = () => {
  return (
    <div>
      <Container>
        <PageDescription pageName={"home"} />
        <hr></hr>
        <HowToDownloadToolInsta />
        <hr></hr>
        <FixedAbout />
        <hr></hr>
        <WhyUseToolInsta />
        <hr></hr>
        <FeaturesToolInsta />
        <hr></hr>
        <WhyChooseToolInsta />
        <hr></hr>
        <FAQToolInsta />
      </Container>
    </div>
  );
};

export default AboutSection;
