import { Main } from "../../components";
import DefaultLayout from "../../layout/index";
import { useEffect, useState } from "react";
import api from "../../services/base/api";
import { useCheckToken } from "../../hooks/checkToken";

export const Home: React.FC = (): React.ReactElement => {
  const [waifu, setWaifu] = useState<string | undefined>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<unknown>();
  const obtainWaifu = async () => {
    try {
      useCheckToken() ? null : window.location.replace("/login");
      setLoading(true);
      const image = await api.waifuApi.getWaifu();
      const { url } = image;
      setLoading(false);
      return url;
    } catch (error) {
      setErrors(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    obtainWaifu().then((waifus) => {
      setWaifu(waifus);
    });
  }, []);

  return (
    <DefaultLayout
      route={
        <Main
          data={waifu}
          isLoading={isLoading}
          hasErrors={errors}
          onClick={() => obtainWaifu().then((waifu) => setWaifu(waifu))}
        />
      }
    />
  );
};
