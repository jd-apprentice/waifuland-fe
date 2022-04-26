export interface ILinkProps {}
export interface AppProps {}
export interface ILayoutProps extends RouteProps {}
export interface IDocsProps extends RouteProps {}

export interface IContainerStyleProps {
  display?: string;
  flexDirection?: string;
  alignSelf?: string;
  justifyContent?: string;
  fontSize?: number;
  textAlign?: string;
  paddingTop?: string;
}

export interface IPresentationContainerProps {
  display?: string;
  flexDirection?: string;
  fontSize?: number;
  padding?: string;
}

export interface ILayoutStyle {
  flex?: number;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
}

export interface IImageProps {
  data: string;
}

export interface RouteProps {
  route: React.ReactNode;
}
