// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import DiscoverPage from "./components/DiscoverPage.jsx";
import ArticlePage from "./components/ArticlePage.jsx";
import SideNav from "./components/SideNav.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="flex bg-black w-screen">
      <SideNav />

      <div className="flex-1 ml-64">
        <div className="p-4  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
