import { Divider } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import { useEffect, useState } from "react";
import api from "services/api";

const DefaultLayout = () => {
  const [waifu, setWaifu] = useState();

  useEffect(() => {
    api.waifuApi.getWaifu().then((waifus) => {
      setWaifu(waifus.url);
    });
  }, []);
  return (
    <>
      <div className="wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Main data={waifu} />
        </div>
        <Divider sx={{ margin: 3 }} flexItem />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
