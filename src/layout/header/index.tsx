import * as React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SimpleDrawer from "../../components/common/drawer";
import { MenuProfile } from "../../components/common/menu";
import { useCheckToken } from "../../hooks/checkToken";
import { useLogout } from "../../hooks/logout";

interface ImageProps {
  src?: string;
}

const Header: React.FC<ImageProps> = ({
  src,
}: ImageProps): React.ReactElement => {
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
      p={2}
    >
      <SimpleDrawer />
      <Link href={isHome}>
        <Text color="gray.700" fontSize={{ base: 20 }}>
          Waifuland
        </Text>
      </Link>
      <Box>
        <MenuProfile
          src={src}
          onLogout={() =>
            useLogout() ? window.location.replace("/login") : false
          }
          isLogged={useCheckToken()}
        />
      </Box>
    </Box>
  );
};

export default Header;
