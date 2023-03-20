import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import VideoDownloadPage from "./pages/videopage";
import HeaderBar from "./components/header";
import { useState } from "react";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsAndCondition from "./pages/termsAndCondition";
import ContactUsPage from "./pages/contact";
import OgVideos from "./assets/og_videos.jpg";
import OgReels from "./assets/og_reels.jpg";
import OgStories from "./assets/og_stories.jpg";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <HeaderBar />
              <HomePage
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/videos"
          element={
            <>
              <HeaderBar />
              <VideoDownloadPage
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                indx={1}
                pageName={"video"}
                ogImage={OgVideos}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/reels"
          element={
            <>
              <HeaderBar />
              <VideoDownloadPage
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                indx={3}
                pageName={"reel"}
                ogImage={OgReels}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/stories"
          element={
            <>
              <HeaderBar />
              <VideoDownloadPage
                indx={4}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                pageName={"story"}
                ogImage={OgStories}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/photo"
          element={
            <>
              <HeaderBar />
              <VideoDownloadPage
                indx={2}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                pageName={"photo"}
                ogImage={OgStories}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/igtv"
          element={
            <>
              <HeaderBar />
              <VideoDownloadPage
                indx={5}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                pageName={"igtv"}
                ogImage={OgStories}
              />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/privacy"
          element={
            <>
              <HeaderBar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/tnc"
          element={
            <>
              <HeaderBar />
              <TermsAndCondition />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/contact-us"
          element={
            <>
              <HeaderBar />
              <ContactUsPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
