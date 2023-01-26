import React from 'react'
import { useAuth } from '../auth'

const Profile = () => {
  const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Welcome, {auth.user?.username}</p>
    </>
  )
}

export {Profile}