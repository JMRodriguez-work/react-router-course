import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, BlogPost, Profile, Menu, Login, Logout } from "./components/index";
import { AuthProvider, PrivateRoute } from './auth';

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalala -> not found

const App = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" 
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              } />
            <Route path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export default App;
