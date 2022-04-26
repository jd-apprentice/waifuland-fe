import { Box, Container, Divider } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ButtonLink from "components/common/Link";
import { ContainerStyle, PresentationContainer } from "./styles";
import { IImageProps } from "models/types";

const Main: React.FC<IImageProps> = ({ data }: IImageProps) => {
  return (
    <div className="layout-style">
      <Container sx={{ ...PresentationContainer }}>
        <span style={{ alignSelf: "center", fontSize: 50 }}>
          Bienvenidos a Waifuland, tu api para utilizar imagenes de waifus
          <br /> en diversos tamaños, cantidades y mas.
        </span>
        <Box
          sx={{
            maxWidth: 400,
            maxHeight: 600,
            minWidth: 200,
            minHeight: 200,
            borderRadius: 5,
          }}
          component="img"
          className="img-fluid"
          alt="Waifu"
          src={data}
        />
      </Container>
      <Divider flexItem />
      <Container sx={{ ...ContainerStyle }}>
        <ImageIcon sx={{ fontSize: 200 }} />
        <span style={{ alignSelf: "center", marginBottom: "10px" }}>
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
