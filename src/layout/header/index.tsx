import * as React from "react";
import { Avatar, Box, Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SimpleDrawer from "components/common/drawer";

const Header: React.FC = (): React.ReactElement => {
  const { pathname } = useLocation();
  const home = "/";
  const isHome = pathname === home ? undefined : home;

  return (
    <Box
      backgroundColor="red.200"
      border="1px"
      display="flex"
      justifyContent="space-between"
      position="sticky"
      alignItems="center"
    >
      <SimpleDrawer />
      <Link href={isHome}>
        <Text color="gray.700" fontSize={{ base: 20 }}>
          Waifuland
        </Text>
      </Link>
      <Avatar
        name="Jonathan"
        src="https://cdn.discordapp.com/attachments/610338409671557121/1032420671122313237/Profile_Picture_1_1.png"
      />
    </Box>
  );
};

export default Header;
