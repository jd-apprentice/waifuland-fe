import { Box } from "@chakra-ui/react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { RouteProps } from "../models/types";

const DefaultLayout: React.FC<RouteProps> = ({ route }: RouteProps) => {
  const picture = localStorage.getItem("user") || undefined;
  return (
    <>
      <Box>
        <Box>
          <Header src={picture} />
        </Box>
        <Box>{route}</Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
