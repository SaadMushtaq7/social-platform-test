import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPreview from "./components/StoryPreview";
import Stories from "./components/Stories";
import "./App.css";

const App: FC = () => {
  return (
    <Router>
      <div className="App bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/story" element={<StoryPreview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
