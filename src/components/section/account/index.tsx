import { Box, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { baseProfilePicture } from "../../../const";
import { AccountProps } from "../../../models/types";
import { SubmitButton } from "../../common/button";
import { BasicInput } from "../../common/input";

export const Account = ({ onChange, onClick, picture }: AccountProps) => {
  return (
    <Box p={{ base: 5, lg: 10 }}>
      <Center display="flex" flexDirection="column">
        <Text fontSize={{ base: 20, lg: 30 }}>Profile picture</Text>
        <Image
          width={{ base: 290 }}
          height={{ base: 290 }}
          mb={{ base: 5, lg: 10 }}
          src={picture ?? baseProfilePicture}
          alt="Profile picture"
        />
        <Box>
          <BasicInput
            className="submit"
            name="image"
            type="file"
            onChange={onChange}
          />
        </Box>
        <SubmitButton onClick={onClick} color="red.200" text="Save" />
      </Center>
    </Box>
  );
};
