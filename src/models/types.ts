export interface IMainProps {
  data?: string;
  isLoading?: boolean;
  hasErrors?: any;
  onClick?: () => void;
}

export interface RouteProps {
  route: React.ReactNode;
}

export interface TextBoxProps {
  text: string;
}

export interface CodeBoxProps {
  text: string;
  method: string;
  endpoint: string;
}
