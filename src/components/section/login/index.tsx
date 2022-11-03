import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { LoginProps } from "../../../models/types";
import { SubmitButton } from "../../common/button";
import { PasswordInput, BasicInput } from "../../common/input";

/**
 * @description This is a component that renders a login form.
 * @param { string } user - The username of the user
 * @param { string } pass - The password of the user
 * @param { FormEventHandler<HTMLDivElement> } onSubmit - Form submit event
 * @returns { React.ReactElement<LoginProps> } Returns a login form
 */

export const Login = ({
  user = "",
  pass = "",
  onSubmit,
  onChange,
  onClick,
  hasErrors,
  responseError,
}: LoginProps): React.ReactElement<LoginProps> => {
  const [password, setPassword] = React.useState<string>(user);
  const [username, setUsername] = React.useState<string>(pass);

  useEffect(() => {
    onChange(username, password);
  }, [username, password]);

  return (
    <Box m={10} display="flex" justifyContent="center" borderRadius="initial">
      <FormControl
        w={{ base: "100%", md: "50%", lg: "30%" }}
        m={10}
        isInvalid={hasErrors}
        textAlign="center"
        onSubmit={onSubmit}
        isRequired
      >
        <Box>
          <FormLabel>Username</FormLabel>
          <BasicInput onChange={(e) => setUsername(e.target.value)} />
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <PasswordInput onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Box>
          <SubmitButton color="black" onClick={onClick} text="Log in" />
        </Box>
        {!hasErrors ? (
          <FormHelperText>
            We will never share your information with anyone else.
          </FormHelperText>
        ) : (
          <Center>
            <FormErrorMessage fontSize={{ base: 20 }}>
              {responseError}
            </FormErrorMessage>
          </Center>
        )}
      </FormControl>
    </Box>
  );
};
