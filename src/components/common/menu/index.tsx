import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Avatar,
  Skeleton,
} from "@chakra-ui/react";

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
  src = "",
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
        {src === "" ? (
          <Skeleton border="1px" borderRadius="full">
            <Avatar src={src} name={name} />
          </Skeleton>
        ) : (
          <Avatar src={src} name={name} />
        )}
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
