import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListSidebar = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const navigateToDocs = () => navigate("/docs");
  const navigateToImages = () => navigate("/images");

  return (
    <List>
      <ListItem button onClick={navigateToHome}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>
      <ListItem button onClick={navigateToDocs}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary={"Documentation"} />
      </ListItem>
      <ListItem button onClick={navigateToImages}>
        <ListItemIcon>
          <ImageIcon />
        </ListItemIcon>
        <ListItemText primary={"Images"} />
      </ListItem>
    </List>
  );
};

const Sidebar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(state);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListSidebar />
    </Box>
  );

  return (
    <>
      <MenuIcon className="headerIcon" onClick={toggleDrawer(true)} />
      <Drawer
        className="backgroundColor-black"
        open={state}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default Sidebar;
