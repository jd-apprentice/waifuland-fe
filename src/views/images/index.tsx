import { Images } from "components/section/images";
import DefaultLayout from "layout/index";
import { IImage } from "models/types";
import { useEffect, useState } from "react";
import api from "services/api";

const ImagesView = () => {
  const [waifu, setWaifu] = useState<IImage[]>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const obtainWaifu = async () => {
    try {
      setLoading(true);
      const image = await api.waifuApi.getWaifus(20);
      setLoading(false);
      return image;
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    obtainWaifu().then((waifus) => {
      setWaifu(waifus);
    });
  }, []);
  return <DefaultLayout route={<Images images={waifu} />} />;
};

export default ImagesView;
