import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";

const Menu = () => {

  const auth = useAuth();

  return (

    
    <nav>
      <ul>
        {routes.map((route) => {

          if(!!route.private && !auth.user) return null; //Para ocultar Logout y Profile sin acceder
          if(route.to === './login' && auth.user) return null; //Para ocultar Login al acceder
          
          return (
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
          )
        })}
      </ul>
    </nav>
  );
};

const routes = [];
routes.push({
  to: "./",
  text: "Home",
  private: false,
});
routes.push({
  to: "./blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "./profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "./login",
  text: "Login",
  private: false,
});
routes.push({
  to: "./logout",
  text: "Logout",
  private: true,
});

export { Menu };
