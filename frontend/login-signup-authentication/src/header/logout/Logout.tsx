import React from 'react'

export const Logout = () => {
  return (
      localStorage.removeItem("token")
  )
}
