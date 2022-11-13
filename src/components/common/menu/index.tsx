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
    src?: string
    name?: string
    color?: string
    isLogged?: boolean
    onLogout?: () => void
    onMyAccount?: () => void
}

export const MenuProfile: React.FC<MenuProps> = ({
    src = "",
    name = "Waifuland",
    color = "red.200",
    isLogged,
    onLogout,
    onMyAccount,
}: MenuProps): React.ReactElement<MenuProps> => {
    return (
        <Menu>
            <MenuButton as={Button} colorScheme={color}>
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
                    <>
                        <MenuGroup ml={3} title="Profile">
                            <MenuItem onClick={onMyAccount}>
                                My Account
                            </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                    </>
                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                </MenuList>
            ) : (
                <></>
            )}
        </Menu>
    );
};
