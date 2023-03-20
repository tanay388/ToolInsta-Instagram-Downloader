import {
  Container,
  TextField,
  Button,
  Paper,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import { PRIMARY_COLOR_LIGHT } from "../../constants/colors";
import { getStringInLocalLanguage } from "../../constants/string";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Clear,
  ContentPaste,
  GetAppSharp,
  ImageAspectRatio,
  Instagram,
} from "@mui/icons-material";
import { GET_MEDIA_URL_API, postApiCall } from "../../api";
import DisplayCards from "./DisplayCard";
import VideocamIcon from "@mui/icons-material/Videocam";
import MovieIcon from "@mui/icons-material/Movie";
import SplitButton from "./DropdownButton";
import { useNavigate } from "react-router-dom";

const InputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const InputWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 10,
  marginBottom: 10,
  padding: theme.spacing(0.5, 1),
  backgroundColor: "#f5f5f5",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
}));

const ClearButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff8a65",
  padding: "8px",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#ff7043",
  },
}));

const PasteButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#81c784",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#66bb6a",
  },
}));

// const IconWrapper = styled("div")(({ theme }) => ({
//   marginRight: theme.spacing(0.5),
// }));

// const IconLabel = styled("div")(({ theme }) => ({
//   fontWeight: "bold",
//   fontSize: 12,
// }));

const Input = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderRadius: 10,
    border: 0,
  },
  "& .MuiOutlinedInput-input": {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1.5),
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "#1976D2",
  paddingTop: "10px",
  paddingBottom: "10px",
  color: "#fff",
  border: "0px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#1565C0",
  },
}));

const InputContainerComponent = ({ setResultList, setLoading }) => {
  const [InputUrl, setInputUrl] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputUrl(value);
    setShowClearButton(value !== "");
  };

  const handleClearButtonClick = () => {
    setInputUrl("");
    setShowClearButton(false);
  };

  const handlePasteButtonClick = () => {
    if (navigator.clipboard) {
      // clipboard API is supported
      navigator.clipboard
        .readText()
        .then((clipboardText) => {
          setInputUrl(clipboardText);
          setShowClearButton(clipboardText !== "");
        })
        .catch((err) => {
          console.error("Failed to read clipboard contents: ", err);
        });
    } else {
      // clipboard API is not supported
      // fallback to using document.execCommand() method
      const inputElement = document.createElement("input");
      inputElement.style.opacity = "0";
      document.body.appendChild(inputElement);

      inputElement.focus();
      document.execCommand("paste");

      const clipboardText = inputElement.value;
      setInputUrl(clipboardText);
      setShowClearButton(clipboardText !== "");

      document.body.removeChild(inputElement);
    }
  };

  const handleSubmitButtonClick = async () => {
    // Handle submit button click
    // if (InputUrl.includes("stories")) {
    //   const splitpath = InputUrl.split("/");
    //   console.log(splitpath);
    // }
    let data = {
      url: InputUrl.includes("stories")
        ? "https://instagram.com/stories/" + InputUrl.split("/")[4]
        : InputUrl,
    };
    // if (InputUrl.includes("stories")) {
    //   const splitpath = InputUrl.split("/");
    //   console.log(splitpath);
    // }

    console.log(data);
    setLoading(true);
    const response = await postApiCall(GET_MEDIA_URL_API, data);
    setLoading(false);
    setResultList(response.url_list);
    console.log(response);
  };

  return (
    <InputContainer>
      <InputWrapper>
        <Input
          fullWidth
          value={InputUrl}
          placeholder={getStringInLocalLanguage("input_placeholder_text")}
          onChange={handleInputChange}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <>
                {showClearButton ? (
                  <div>
                    <ClearButton
                      startIcon={<Clear />}
                      onClick={handleClearButtonClick}
                    >
                      Clear
                    </ClearButton>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <PasteButton
                      startIcon={<ContentPaste />}
                      onClick={handlePasteButtonClick}
                    >
                      Paste
                    </PasteButton>
                  </div>
                )}
              </>
            ),
          }}
        />
      </InputWrapper>
      <br />
      <SubmitButton
        variant="contained"
        startIcon={<GetAppSharp />}
        onClick={handleSubmitButtonClick}
      >
        Download
      </SubmitButton>
    </InputContainer>
  );
};

const SelectorInstagramOptions = ({ selectedIndex, setSelectedIndex }) => {
  const options = [
    {
      icon: <Instagram />,
      text: "Posts",
      nav: "/",
    },
    {
      icon: <VideocamIcon />,
      text: "Videos",
      nav: "/videos",
    },
    {
      icon: <ImageAspectRatio />,
      text: "Photos",
      nav: "/photo",
    },
    {
      icon: <MovieIcon />,
      text: "Reels",
      nav: "/reels",
    },
    {
      icon: <Instagram />,
      text: "Stories",
      nav: "/stories",
    },
    {
      icon: <VideocamIcon />,
      text: "IGTV",
      nav: "/igtv",
    },
  ];

  const nav = useNavigate();

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          backgroundColor: "transparent",
          border: (theme) => `0px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        }}
      >
        <ButtonGroup
          className="desktop-only"
          variant="contained"
          aria-label="outlined primary button group"
        >
          {options.map((item, indx) => {
            return (
              <Button
                key={indx}
                startIcon={item.icon}
                aria-label={item.text}
                onClick={() => {
                  setSelectedIndex(indx);
                  nav(item.nav);
                }}
                style={{
                  backgroundColor: `${indx === selectedIndex ? "#1565c0" : ""}`,
                }}
              >
                {item.text}
              </Button>
            );
          })}
        </ButtonGroup>
        <span className="mobile-only">
          <SplitButton
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            options={options}
          />
        </span>
      </Paper>
    </>
  );
};

const InputSection = ({ pageName, selectedIndex, setSelectedIndex }) => {
  const [loading, setLoading] = useState(false);
  const [resultList, setResultList] = useState([]);
  return (
    <main>
      <div
        style={{
          backgroundColor: `${PRIMARY_COLOR_LIGHT}`,
          minHeight: "240px",
          padding: "60px 0",
        }}
      >
        <Container>
          <SelectorInstagramOptions
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <h2
            style={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}
          >
            {getStringInLocalLanguage(pageName + "_heading")}
          </h2>
          <p
            style={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}
          >
            {getStringInLocalLanguage(pageName + "_subheading")}
          </p>

          <InputContainerComponent
            setLoading={setLoading}
            setResultList={setResultList}
          />
          <div style={{ width: "10px", height: "16px" }} />
          <DisplayCards urlList={resultList} loading={loading} />
        </Container>
      </div>
    </main>
  );
};

export default InputSection;
