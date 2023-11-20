import { Outlet, Navigate } from "react-router-dom"

export const ProfilePage = () => {
  const userAuth = true

  if (!userAuth) {
    <Navigate to={'login'}/>
  }
  return (
    <Outlet/>
  )
}
