import { Divider } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { ILayoutProps, RouteProps } from "models/types";

const DefaultLayout: React.FC<ILayoutProps> = ({ route }: RouteProps) => {
  return (
    <>
      <div className="wrapper">
        <div>
          <Header />
        </div>
        <div>{route}</div>
        <Divider sx={{ margin: 3 }} flexItem />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
