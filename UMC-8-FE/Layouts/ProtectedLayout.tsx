import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../src/context/Authcontext";


const ProtectedLayout = () => {
  const { accessToken }: { accessToken: string | null } = useAuth();

  if (!accessToken) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet/>;
};

export default ProtectedLayout;
