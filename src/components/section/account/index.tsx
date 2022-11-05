import { Avatar } from "@chakra-ui/avatar";
import { Box, Center } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { baseProfilePicture } from "../../../const";
import { SubmitButton } from "../../common/button";
import { BasicInput } from "../../common/input";

export const Account = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const picture = localStorage.getItem("user") || baseProfilePicture;

  return (
    <Box p={{ base: 5, lg: 10 }}>
      <Center display="flex" flexDirection="column">
        <Avatar
          mb={{ base: 5, lg: 10 }}
          size={{ base: "xl", lg: "4xl" }}
          src={picture}
        />
        <Box>
          <BasicInput type="file" onChange={onChange} />
        </Box>
        <Box>
          <SubmitButton color="red.200" text="Save" />
        </Box>
      </Center>
    </Box>
  );
};
