import * as React from "react";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { ILinkProps } from "models/types";

const ButtonLink: React.FC<ILinkProps> = () => {
  let navigate = useNavigate();

  return (
    <Link
      sx={{ fontSize: 35, textDecoration: "none", color: "white" }}
      component="button"
      variant="body2"
      onClick={() => {
        navigate("/docs");
      }}
    >
      Documentacion
    </Link>
  );
};

export default ButtonLink;
