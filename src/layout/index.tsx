import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCheckToken } from "../hooks/checkToken";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { IUser, RouteProps } from "../models/types";
import api from "../services/base/api";

const DefaultLayout: React.FC<RouteProps> = ({ route }: RouteProps) => {
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();
  const isAccount = pathname === "/account";
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const isLogged = useCheckToken();
    if (isLogged) {
      if (token) {
        api.userApi
          .getUserInfo(token)
          .then((response) => setUser(response as IUser));
      }
    }
  }, [user]);

  return (
    <>
      <Box>
        <Box>
          <Header isMyAccount={isAccount} src={user?.profile_picture} />
        </Box>
        <Box>{route}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
