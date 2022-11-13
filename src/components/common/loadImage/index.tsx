import { Tooltip, Button, Icon, Box } from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";

/**
 * @description Spinner icon that when clicked will download a new image from the server
 * @param { void } onClick - onClick callback
 * @returns Button that loads a new image
 */

export const LoadImage: React.FC<{ onClick: (() => void) | undefined }> = ({
    onClick,
}: {
    onClick: (() => void) | undefined
}): React.ReactElement => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            fontSize={{ base: "lg", lg: "3xl" }}
        >
            <Tooltip hasArrow label="Load a new image">
                <Button
                    backgroundColor="red.200"
                    colorScheme="gray"
                    variant="outline"
                    onClick={onClick}
                >
                    <Icon as={AiOutlineReload} />
                </Button>
            </Tooltip>
        </Box>
    );
};
