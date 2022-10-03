import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import "./App.css";
import StoryPreview from "./components/StoryPreview";

const App: FC = () => {
  return (
    <Router>
      <div className="App bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/story" element={<StoryPreview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
