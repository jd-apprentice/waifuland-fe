import * as React from "react";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const ButtonLink = () => {
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
