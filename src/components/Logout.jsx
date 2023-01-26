import React from 'react'
import { useAuth } from '../auth';

const Logout = () => {

  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
        <h1>Logout</h1>

        <form onSubmit={logout}>
          <label>¿Seguro/a que deseas salir?</label>

          <button type="submit" >
            Salir
          </button>
        </form>
    </>
  )
}

export { Logout }