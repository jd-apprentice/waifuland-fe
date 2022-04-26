import {
  IContainerStyleProps,
  ILayoutStyle,
  IPresentationContainerProps,
} from "models/types";

const ContainerStyle: IContainerStyleProps = {
  display: "flex",
  flexDirection: "row",
  alignSelf: "center",
  textAlign: "center",
  fontSize: 40,
  paddingTop: "1rem",
};

const PresentationContainer: IPresentationContainerProps = {
  display: "flex",
  flexDirection: "row",
  fontSize: 40,
  padding: "1rem",
};

const LayoutStyle: ILayoutStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export { ContainerStyle, LayoutStyle, PresentationContainer };
