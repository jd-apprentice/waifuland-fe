import * as React from "react";
import Link from "@mui/material/Link";

const ButtonLink = () => {
  return (
    <Link
      sx={{ fontSize: 35 }}
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Documentacion
    </Link>
  );
};

export default ButtonLink;
