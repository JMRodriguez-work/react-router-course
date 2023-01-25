import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        {/*funciona correctamente
         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        {/* funciona correctamente 
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            Profile
          </NavLink>
        </li> */}

        {routes.map((route) => (
          <li key={route.text}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
            >
              {route.text}
            </NavLink>
            
          </li>
        ))}
      </ul>
    </nav>
  );
};

const routes = [];
routes.push({
  to: "./",
  text: "Home",
});
routes.push({
  to: "./blog",
  text: "Blog",
});
routes.push({
  to: "./profile",
  text: "Profile",
});

export { Menu };
