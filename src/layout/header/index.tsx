import * as React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Header: React.FC = (): React.ReactElement => {
  const { pathname } = useLocation();
  const home = "/";
  const isHome = pathname === home ? undefined : home;

  return (
    <Box
      backgroundColor="red.200"
      border="1px"
      display="flex"
      justifyContent="center"
      position="sticky"
    >
      <Link href={isHome}>
        <Text color="gray.700" fontSize={{ base: 20 }}>
          Waifuland
        </Text>
      </Link>
    </Box>
  );
};

export default Header;
