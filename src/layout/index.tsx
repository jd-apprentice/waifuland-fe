import { Box } from "@chakra-ui/react";
import Footer from "layout/footer";
import Header from "layout/header";
import { RouteProps } from "models/types";

const DefaultLayout: React.FC<RouteProps> = ({ route }: RouteProps) => {
  return (
    <>
      <Box>
        <Box>
          <Header />
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
