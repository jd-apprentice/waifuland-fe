import { Box, Center, FormControl, FormLabel } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SubmitButton } from "../../common/button";
import { BasicInput } from "../../common/input";

interface AccountProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  picture: string;
}

export const Account = ({ onChange, onClick, picture }: AccountProps) => {
  return (
    <FormControl p={{ base: 5, lg: 10 }}>
      <Center display="flex" flexDirection="column">
        <FormLabel fontSize={{ base: 30, lg: 40 }}>Profile picture</FormLabel>
        <Image
          width={{ base: 290 }}
          height={{ base: 290 }}
          mb={{ base: 5, lg: 10 }}
          src={picture}
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
    </FormControl>
  );
};
