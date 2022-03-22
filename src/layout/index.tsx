import { Divider } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const DefaultLayout = ({ route }: any) => {
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
