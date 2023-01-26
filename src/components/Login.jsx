import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

const Login = () => {
  const auth = useAuth()
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
    setUsername('');
  };

  if(auth.user){
    return <Navigate to="/profile" />
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Ingrese nombre de usuario: </label>
        <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
        />

        <button
            type="submit"
        >
            Entrar
        </button>
      </form>
    </>
  );
};

export { Login };
