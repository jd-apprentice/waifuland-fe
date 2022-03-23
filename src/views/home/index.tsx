import Main from "components/Main/Main";
import DefaultLayout from "layout/index";
import { useEffect, useState } from "react";
import api from "services/api";

const Home = () => {
  const [waifu, setWaifu] = useState();

  useEffect(() => {
    api.waifuApi.getWaifu().then((waifus) => {
      setWaifu(waifus.url);
    });
  }, []);

  return <DefaultLayout route={<Main data={waifu} />} />;
};

export default Home;
