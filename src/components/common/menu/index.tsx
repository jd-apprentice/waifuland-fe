import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";

interface MenuProps {
  src?: string;
  name?: string;
  color?: string;
  isLogged?: boolean;
  onLogout?: () => void;
}

export const MenuProfile: React.FC<MenuProps> = ({
  src = "https://cdn.discordapp.com/attachments/610338409671557121/1032420671122313237/Profile_Picture_1_1.png",
  name = "Waifuland",
  color = "red.200",
  isLogged,
  onLogout,
}: MenuProps): React.ReactElement<MenuProps> => {
  return (
    <Menu>
      <MenuButton
        cursor={isLogged ? "pointer" : "initial"}
        as={Button}
        colorScheme={color}
      >
        <Avatar src={src} name={name} />
      </MenuButton>
      {isLogged && (
        <MenuList>
          <MenuGroup ml={3} title="Profile">
            <MenuItem>My Account</MenuItem>
          </MenuGroup>
          <>
            <MenuDivider />
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        </MenuList>
      )}
    </Menu>
  );
};
