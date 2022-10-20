import { Images } from "../../components/section/images";
import { waifusPerFetch } from "../../const";
import DefaultLayout from "../../layout/index";
import { IImage, Tag } from "../../models/types";
import { useEffect, useState } from "react";
import api from "../../services/api";

export const ImagesView = () => {
  const [waifu, setWaifu] = useState<IImage[]>(); // Array of images
  const [tags, setTags] = useState<Tag[]>([]); // Array of tags
  // Get waifus
  const obtainWaifu = async (amount: number, tag_id?: number) => {
    try {
      const image = await api.waifuApi.getWaifus(amount, tag_id);
      return image;
    } catch (error) {
      console.log(error);
    }
  };
  // Get tags
  const obtainTags = async () => {
    try {
      const tags = await api.waifuApi.getTags();
      return tags;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtainWaifu(waifusPerFetch).then((waifus) => {
      setWaifu(waifus);
    });
  }, []);

  useEffect(() => {
    obtainTags().then((tag) => {
      setTags(tag);
    });
  }, []);

  return (
    <DefaultLayout
      route={
        <Images
          onChange={async (e: { target: { value: string | number } }) =>
            await obtainWaifu(waifusPerFetch, +e.target.value).then((waifus) =>
              setWaifu(waifus)
            )
          }
          tags={tags}
          images={waifu}
        />
      }
    />
  );
};
