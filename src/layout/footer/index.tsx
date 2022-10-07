import { DiGithubAlt } from "react-icons/di";
import { Box, Icon, Link, Text } from "@chakra-ui/react";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <Box textAlign="center">
      <Link
        alignItems="center"
        display={{ base: "flex" }}
        justifyContent={{ base: "center" }}
        target={"_blank"}
        href="https://github.com/jd-apprentice/waifuland-fe"
      >
        <Icon
          border="1px"
          borderRadius="full"
          color="gray.700"
          backgroundColor="red.200"
          fontSize={{ base: "40px" }}
          mb={1}
          as={DiGithubAlt}
        />
      </Link>
      <Text display={{ base: "block" }} fontSize={{ base: "20px" }}>
        © Copyright 2022
      </Text>
    </Box>
  );
};

export default Footer;
