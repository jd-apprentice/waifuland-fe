import DefaultLayout from "../../layout";
import { Login } from "../../components";
import api from "../../services/base/api";
import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginView = () => {
  const location = useNavigate();
  const [payload, setPayload] = React.useState({ username: "", password: "" });

  const login = async () => {
    const waifuApi = api.userApi;
    const { username, password } = payload;
    const response = await waifuApi.login(username, password);
    api.api.setToken(response.token);
    localStorage.setItem("token", response.token);
    return location("/");
  };

  return (
    <DefaultLayout
      route={
        <Login
          onChange={(user, pass) =>
            setPayload({ username: user, password: pass })
          }
          onClick={login}
        />
      }
    />
  );
};
