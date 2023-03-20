import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router";

const languages = [
  { value: "en", label: "English" },
  { value: "de", label: "German" },
  { value: "hi", label: "Hindi" },
  { value: "it", label: "Italian" },
  { value: "es", label: "Spanish" },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("toolinsta_language_selected")
      ? localStorage.getItem("toolinsta_language_selected")
      : "en"
  );
  const nav = useNavigate();
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log("New Selected Language: " + selectedLanguage);
    localStorage.setItem("toolinsta_language_selected", event.target.value);

    nav(0);
  };

  return (
    <Select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      label="Language"
      variant="standard"
    >
      {languages.map((language) => (
        <MenuItem key={language.value} value={language.value}>
          {language.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageDropdown;
