import { Container, Divider } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { ContainerStyle } from "./styles";

const DefaultLayout = () => {
  return (
    <>
      <div className="wrapper">
        <div>
          <Header />
        </div>
        <div className="layout-style">
          <Container sx={{ ...ContainerStyle }}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              officia consequuntur ut, temporibus pariatur sequi doloremque ad
              molestiae beatae! Suscipit, reprehenderit! Corrupti maiores autem
              aut, quam repudiandae id enim dignissimos aliquid eius similique
              laudantium aperiam totam reprehenderit fugiat, reiciendis
              doloribus!
            </span>
          </Container>
          <Divider flexItem />
          <Container sx={{ ...ContainerStyle }}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque
              perferendis fuga saepe odit culpa eligendi corrupti, officiis a ea
              asperiores suscipit provident, vero illo corporis magnam nihil
              libero vitae accusantium! Saepe harum excepturi rem quidem quia
              earum odio dicta.
            </span>
          </Container>
          <Divider flexItem />
          <Container sx={{ ...ContainerStyle }}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit esse error ipsa blanditiis corporis sapiente ab sunt
              culpa sequi harum.
            </span>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
