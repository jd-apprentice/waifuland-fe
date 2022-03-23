/* eslint-disable react/jsx-no-comment-textnodes */
import { ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import api from "services/api";

const Images = () => {
  const [waifus, setWaifu] = useState([]);

  useEffect(() => {
    api.waifuApi.getWaifus(12).then((waifus) => {
      setWaifu(waifus);
    });
  }, []);

  return (
    <div style={{ padding: 15 }}>
      <ImageList className="image-list" cols={4} sx={{ margin: 1 }}>
        {waifus?.map((waifu: any, key: any) => (
          <ImageListItem key={key}>
            <img src={waifu} key={key} alt="waifu" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Images;
