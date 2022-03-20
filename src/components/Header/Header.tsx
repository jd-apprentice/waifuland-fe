import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Sidebar from "components/Sidebar/Sidebar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <AppBar position="static" sx={{ backgroundColor: "#db1818" }}>
        <Toolbar>
          <Sidebar />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: 30, fontFamily: "monospace" }}
          >
            Waifuland
          </Typography>
          <Avatar
            alt="Waifu"
            src="https://cheaterboss.com/wp-content/uploads/2022/02/1644520379611.png"
          ></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
