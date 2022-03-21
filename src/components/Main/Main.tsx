import { Box, Container, Divider } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ButtonLink from "components/common/Link";
import { ContainerStyle, PresentationContainer } from "./styles";

const Main = ({ data }: any) => {
  return (
    <div className="layout-style">
      <Container sx={{ ...PresentationContainer }}>
        <span style={{ alignSelf: "center" }}>
          Bienvenidos a Waifuland, tu api para utilizar imagenes de waifus en
          diversos tamaños, cantidades y mas.
        </span>
        <Box
          sx={{
            maxWidth: 550,
            maxHeight: 550,
            borderRadius: 20,
          }}
          component="img"
          className="img-fluid"
          alt="Waifu"
          src={data}
        />
      </Container>
      <Divider flexItem />
      <Container sx={{ ...ContainerStyle }}>
        <ImageIcon sx={{ fontSize: 300 }} />
        <span style={{ alignSelf: "center" }}>
          Se iran agregando mas imagenes de waifus, por el momento solo tenemos
          una cantidad limitada de imagenes, pero pronto estaremos agregando mas
          imagenes.
        </span>
      </Container>
      <Divider flexItem />
      <Container sx={{ ...ContainerStyle }}>
        <span>
          Contamos con una documentacion disponible, podes visitarla en el
          siguiente enlace <ButtonLink />
        </span>
      </Container>
    </div>
  );
};

export default Main;
