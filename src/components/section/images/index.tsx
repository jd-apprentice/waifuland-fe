import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { ImagesProps } from "../../../models/types";
import { Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SelectBox from "../../../components/common/select";

const ImagesStyles = {
  display: "flex",
  justifyContent: "center",
  m: 3,
};

export const Images = ({ images, tags, onChange }: ImagesProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Box sx={ImagesStyles}>
        <Heading fontSize={{ base: "md", lg: "2xl" }}>
          {t("images.title")}
        </Heading>
      </Box>
      <Box p={1}>
        <SelectBox options={tags} onChange={onChange} />
        <SimpleGrid minChildWidth="250px">
          {images &&
            images.map((image: { url: string | undefined }, index) => (
              <Box>
                <Image
                  key={index}
                  objectFit="cover"
                  onClick={() => window.open(image.url)}
                  alt="Waifu"
                  src={image.url}
                ></Image>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
