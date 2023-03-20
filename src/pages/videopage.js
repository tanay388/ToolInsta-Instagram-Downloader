import React, { useEffect } from "react";
import InputSection from "../components/inputform";
import { Container } from "@mui/material";
import { PRIMARY_COLOR_LIGHT } from "../constants/colors";
import { getStringInLocalLanguage } from "../constants/string";
import { Helmet } from "react-helmet";
import Favicon from "../assets/favicon.jpg";
import { FAQToolInsta, PageDescription } from "../components/about";

const HowToDownloadToolInsta = ({ pageName, ogImage }) => {
  return (
    <>
      <Helmet>
        <title>Instagram Downloader: Download Instagram {pageName}</title>
        <meta
          name="description"
          content="Download Instagram photos and videos easily with ToolInsta. No login required. Just paste the link and download. Free and fast."
        />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content={
            pageName === "igtv"
              ? "Instagram IGTV  Video Download - Insta IGTV "
              : "Instagram " +
                pageName +
                " Download - Downloader for Instagram " +
                pageName
          }
        />
        <meta
          property="og:description"
          content={
            pageName === "igtv"
              ? "Instagram IGTV  Video Download - Insta IGTV "
              : "Instagram " +
                pageName +
                " Download - Downloader for Instagram " +
                pageName
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta
          name="twitter:title"
          content={
            pageName === "igtv"
              ? "Instagram IGTV  Video Download - Insta IGTV "
              : "Instagram " +
                pageName +
                " Download - Downloader for Instagram " +
                pageName
          }
        />
        <meta
          name="twitter:description"
          content={
            "Download Instagram " +
            pageName +
            " easily with ToolInsta. No login required. Just paste the link and download. Free and fast."
          }
        />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href={Favicon} />
      </Helmet>
      <div
        style={{ margin: "0 auto", textAlign: "center", padding: "30px 0px" }}
      >
        <h2 style={{ color: `${PRIMARY_COLOR_LIGHT}`, marginBottom: "10px" }}>
          {
            getStringInLocalLanguage(
              "how_to_download_" + pageName + "_heading"
            )[0]
          }
        </h2>

        {getStringInLocalLanguage(
          "how_to_download_" + pageName + "_content"
        ).map((item, indx) => {
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
    </>
  );
};
const FixedAbout = ({ pageName, ogImage }) => {
  return (
    <>
      {getStringInLocalLanguage("about_" + pageName + "_content").map(
        (item, indx) => {
          return (
            <>
              <hr></hr>
              <div
                style={{
                  margin: "0 auto",
                  textAlign: "center",
                  padding: "30px 0px",
                }}
              >
                <h2
                  style={{
                    color: `${PRIMARY_COLOR_LIGHT}`,
                    marginBottom: "10px",
                  }}
                >
                  {
                    getStringInLocalLanguage("about_" + pageName + "_heading")[
                      indx
                    ]
                  }
                </h2>
                {indx === 0 ? (
                  <img
                    src={ogImage}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "300px",
                      margin: "10px 0px",
                    }}
                    alt=" "
                  />
                ) : null}
                <p
                  style={{ textAlign: "left", marginBottom: "10px" }}
                  key={indx}
                >
                  {item}
                </p>
              </div>
            </>
          );
        }
      )}
    </>
  );
};

const VideoAboutSection = ({ pageName, ogImage }) => {
  return (
    <div>
      <Container>
        <PageDescription pageName={pageName} />
        <hr></hr>
        <HowToDownloadToolInsta pageName={pageName} ogImage={ogImage} />
        <FixedAbout pageName={pageName} ogImage={ogImage} />
        <hr></hr>
        <FAQToolInsta />
      </Container>
    </div>
  );
};

const VideoDownloadPage = ({
  selectedIndex,
  setSelectedIndex,
  pageName,
  indx,
  ogImage,
}) => {
  useEffect(() => {
    handleOpenPage();
  });
  const handleOpenPage = () => {
    indx === null || indx === undefined
      ? (indx = indx)
      : setSelectedIndex(indx);
  };

  return (
    <div>
      <InputSection
        pageName={pageName}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <VideoAboutSection pageName={pageName} ogImage={ogImage} />
    </div>
  );
};

export default VideoDownloadPage;
