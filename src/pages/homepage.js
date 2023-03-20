import React from "react";
import InputSection from "../components/inputform";
import AboutSection from "../components/about";
import { Helmet } from "react-helmet";
import OgPosts from "../assets/og_posts.jpg";
import Favicon from "../assets/favicon.jpg";

const HomePage = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <>
      <Helmet>
        <title>
          Instagram Downloader: Download Instagram Video, Reels, Photo, Story
          And IGTV
        </title>
        <meta
          name="description"
          content="Download Instagram photos and videos easily with ToolInsta. No login required. Just paste the link and download. Free and fast."
        />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content="ToolInsta Instagram Downloader: Download Instagram Video, Reels, Photo, Story And IGTV"
        />
        <meta
          property="og:description"
          content="Download Instagram photos and videos easily with ToolInsta. No login required. Just paste the link and download. Free and fast."
        />
        <meta property="og:image" content={OgPosts} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta
          name="twitter:title"
          content="Instagram Downloader: Download Instagram Video, Reels, Photo, Story And IGTV"
        />
        <meta
          name="twitter:description"
          content="Download Instagram photos and videos easily with ToolInsta. No login required. Just paste the link and download. Free and fast."
        />
        <meta name="twitter:image" content={OgPosts} />
        <link rel="icon" href={Favicon} />
      </Helmet>
      <InputSection
        pageName={"top"}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <AboutSection />

      <div style={{ display: "none" }}>
        <a href="/videos">videos</a>
        <a href="/reels">videos</a>
        <a href="/stories">videos</a>
        <a href="/contact-us">contact-us</a>
        <a href="/photo">phots</a>
        <a href="/igtv">igtv</a>
      </div>
    </>
  );
};

export default HomePage;
