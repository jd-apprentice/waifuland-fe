import { Box, Text } from "@chakra-ui/react";
import { TextBoxProps } from "models/types";

/**
 * @description Generates a box that displays a portion of text
 * @param { string } text - The text to be displayed in the box
 * @returns A box with text
 */

export const TextBox: React.FC<TextBoxProps> = ({
  text,
}: TextBoxProps): React.ReactElement => {
  return (
    <Box textAlign="center" p={{ base: 3 }}>
      <Text letterSpacing="tight" fontSize={{ base: "20px" }}>
        {text}
      </Text>
    </Box>
  );
};
