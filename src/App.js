import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalala -> not found

const App = () => {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
