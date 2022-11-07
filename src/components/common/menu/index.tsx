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
import { baseProfilePicture } from "../../../const";

interface MenuProps {
  src?: string;
  name?: string;
  color?: string;
  isLogged?: boolean;
  onLogout?: () => void;
  onMyAccount?: () => void;
  isMyAccount?: boolean;
}

export const MenuProfile: React.FC<MenuProps> = ({
  src = baseProfilePicture,
  name = "Waifuland",
  color = "red.200",
  isLogged,
  onLogout,
  onMyAccount,
  isMyAccount,
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
      {isLogged ? (
        <MenuList>
          {!isMyAccount && (
            <>
              <MenuGroup ml={3} title="Profile">
                <MenuItem onClick={onMyAccount}>My Account</MenuItem>
              </MenuGroup>
              <MenuDivider />
            </>
          )}
          <MenuItem
            cursor={isLogged ? "pointer" : "initial"}
            onClick={onLogout}
          >
            Logout
          </MenuItem>
        </MenuList>
      ) : (
        <></>
      )}
    </Menu>
  );
};
