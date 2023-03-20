import React from "react";
import { Container, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import { Helmet } from "react-helmet";
import Favicon from "../assets/favicon.jpg";

const HeroSection = styled("div")({
  backgroundColor: "#FF5B59",
  padding: "100px 0",
  textAlign: "center",
});

const Heading = styled(Typography)({
  fontWeight: "bold",
  fontSize: "36px",
  marginBottom: "20px",
  color: "#FFFFFF",
});

const Subheading = styled(Typography)({
  fontSize: "20px",
  color: "#FFFFFF",
});

const ContactSection = styled("div")({
  backgroundColor: "#FFFFFF",
  padding: "60px",
  textAlign: "center",
});

const EmailHeading = styled(Typography)({
  fontWeight: "bold",
  fontSize: "24px",
  marginBottom: "20px",
  color: "#FF5B59",
});

const ContactUsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | ToolInsta: Download Instagram Video, Reels, Photo, Story
          And IGTV
        </title>
        <meta
          name="description"
          content="Get in touch with ToolInsta for any questions, concerns or feedback. We aim to respond to all inquiries within 24-48 hours.Download Instagram photos and videos easily with ToolInsta. No login required. Just paste the link and download. Free and fast."
        />
        <link rel="canonical" href="https://www.toolinsta.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.toolinsta.com/contact-us"
        />
        <meta
          property="og:title"
          content="Contact Us | Instagram Downloader: Download Instagram Video, Reels, Photo, Story And IGTV"
        />
        <meta
          property="og:description"
          content="Get in touch with ToolInsta for any questions, concerns or feedback. We aim to respond to all inquiries within 24-48 hours."
        />
        <meta property="og:image" content={Favicon} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.toolinsta.com/contact-us"
        />
        <meta
          name="twitter:title"
          content="contact Us | Instagram Downloader: Download Instagram Video, Reels, Photo, Story And IGTV"
        />
        <meta
          name="twitter:description"
          content="Get in touch with ToolInsta for any questions, concerns or feedback. We aim to respond to all inquiries within 24-48 hours."
        />
        <meta name="twitter:image" content={Favicon} />
        <link rel="icon" href={Favicon} />
      </Helmet>
      <HeroSection>
        <Container>
          <Heading variant="h1">Contact Us</Heading>
          <Subheading variant="h2">
            Need help or have a question? Let us know.
          </Subheading>
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            href="mailto:helpagc0909@gmail.com"
            startIcon={<EmailIcon />}
          >
            Email Us
          </Button>
        </Container>
      </HeroSection>
      <ContactSection>
        <Container>
          <EmailHeading variant="h3">Have a Question or Concern?</EmailHeading>
          <Typography variant="body1">
            If you have any questions, concerns or feedback regarding ToolInsta,
            please feel free to send us an email at{" "}
            <Link href="mailto:helpagc0909@gmail.com" color="#FF5B59">
              helpagc0909@gmail.com
            </Link>
            .
          </Typography>
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            We aim to respond to all inquiries within 24-48 hours.
          </Typography>
        </Container>
      </ContactSection>
    </>
  );
};

export default ContactUsPage;
