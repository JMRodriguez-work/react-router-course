import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, BlogPost, Profile, Menu } from "./components/index";

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
          <Route path="/blog" element={<Blog />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
