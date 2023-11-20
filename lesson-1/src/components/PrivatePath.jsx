import { Outlet, Navigate } from "react-router-dom"; 
 
const PrivatePath = () => { 
  const userAuth = true; 
 
  if (!userAuth) { 
    return <Navigate to={"/login"} />; 
  } 
 
  return <Outlet />; 
}; 
export default PrivatePath;
