import { routerData } from "@/router/routerData";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/auth" || location.pathname === "/auth/") {
      navigate(routerData.auth.login);
    }
  }, [location.pathname]);
  return (
    <div
      id="Auth"
      className="w-full min-h-[100dvh] flex justify-center items-center p-4 bg-MainBlue-50"
    >
      <div className="bg-white text-white p-8 w-full max-w-[480px] rounded-md shadow-md pb-12">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
