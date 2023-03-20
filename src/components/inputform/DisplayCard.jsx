import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Grid,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import { saveAs } from "file-saver";
import ErrorImage from "../../assets/error.png";
// import html2canvas from "html2canvas";

const DownloadButton = styled(Button)({
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(0%, -50%)",
  zIndex: "1",
  border: "0px",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0861b9",
    border: "1px",
  },
});

const CardContainer = styled(Card)(({ isVideo }) => ({
  position: "relative",
  width: "100%",
  // paddingTop: isVideo ? "177.77%" : "100%", // 16:9 aspect ratio for videos, 1:1 for images
  overflow: "hidden",
}));

const CardMediaComponent = styled(CardMedia)({});

const CardContentComponent = styled(CardContent)({
  backgroundColor: "#1976D2",
  color: "#fff",
  textAlign: "center",
  padding: "6px 10px !important",
});

const SingleCard = ({ url, idx }) => {
  const isVideo = url.includes(".mp4");

  const downloadImage = (url) => {
    saveAs(url, "image.jpg"); // Put your image url here.
  };

  // const handleDownloadImage = async () => {
  //   const element = document.getElementById("canva-img-" + idx);

  // };

  return (
    <CardContainer isVideo={isVideo}>
      <CardMediaComponent
        component={isVideo ? "video" : "img"}
        src={url}
        id={isVideo ? "" : "canva-img-" + idx}
        poster={!isVideo ? url : undefined}
        autoPlay={false}
        controls={isVideo}
        muted={false}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop if fallback image also fails to load
          e.target.src = ErrorImage; // Set the fallback image path here
        }}
      />
      <CardContentComponent>
        {isVideo ? (
          <DownloadButton
            variant="outlined"
            startIcon={<GetAppIcon />}
            href={url}
            download
          >
            Download
          </DownloadButton>
        ) : (
          <DownloadButton
            variant="outlined"
            startIcon={<GetAppIcon />}
            onClick={() => downloadImage(url)}
          >
            Download
          </DownloadButton>
        )}
      </CardContentComponent>
    </CardContainer>
  );
};

const DisplayCards = ({ urlList, loading }) => {
  return (
    <Grid container spacing={3}>
      {loading ? (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Grid>
      ) : urlList ? (
        urlList.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.3} key={index}>
            <SingleCard url={item} idx={index} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "center", color: "#fff" }}>Nothing found</h3>
        </Grid>
      )}
    </Grid>
  );
};

export default DisplayCards;
