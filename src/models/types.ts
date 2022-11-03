import { FormEventHandler } from "react";

export interface IMainProps {
  data?: string;
  isLoading?: boolean;
  hasErrors?: any;
  onClick?: () => void;
}

export interface RouteProps {
  route: React.ReactNode;
  picture?: string;
}

export interface TextBoxProps {
  text: string;
}

export interface CodeBoxProps {
  text: string;
  method: string;
  endpoint: string;
}

export interface IImage {
  id: string;
  url: string;
  is_nsfw: boolean;
  tag: Tag;
}

export interface ImagesProps {
  images?: IImage[];
  tags?: Tag[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface Tag {
  [x: string]: any;
  name: string;
  tag_id: number;
  description: string;
  is_nsfw: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ErrorCodes {
  code: number;
  message: string;
}

export interface LoginProps {
  onSubmit?: FormEventHandler<HTMLDivElement>;
  onChange: (username: string, password: string) => void;
  onClick?: () => void;
  loading?: boolean;
  user?: string;
  pass?: string;
  hasErrors?: boolean;
  responseError?: string;
}
