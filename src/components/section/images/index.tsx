import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { ImagesProps } from "models/types";
import { Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ImagesStyles = {
  display: "flex",
  justifyContent: "center",
  m: 3,
};

export const Images = ({ images }: ImagesProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Box sx={ImagesStyles}>
        <Heading fontSize={{ base: "md", lg: "2xl" }}>
          {t("images.title")}
        </Heading>
      </Box>
      <Box p={1}>
        <SimpleGrid minChildWidth="250px" p={1} spacing={1}>
          {images &&
            images.map((image: { url: string | undefined }) => (
              <Box>
                <Image
                  my={1}
                  border="1px"
                  borderRadius="inherit"
                  borderColor="red.200"
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
