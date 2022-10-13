import { DiGithubAlt } from "react-icons/di";
import { Box, Text } from "@chakra-ui/react";
import { IconButtonCustom } from "components/common/iconButton";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <Box textAlign="center">
      <IconButtonCustom
        link="https://github.com/jd-apprentice/waifuland-fe"
        icon={DiGithubAlt}
      />
      <Text display={{ base: "block" }} fontSize={{ base: "20px" }}>
        © Copyright 2022
      </Text>
    </Box>
  );
};

export default Footer;
