import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import React, { FormEventHandler, useEffect } from "react";
import { SubmitButton } from "../../common/button";
import { PasswordInput, BasicInput } from "../../common/input";

interface LoginProps {
  onSubmit?: FormEventHandler<HTMLDivElement>;
  onChange: (username: string, password: string) => void;
  onClick?: () => void;
  loading?: boolean;
  user?: string;
  pass?: string;
}

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
}: LoginProps): React.ReactElement<LoginProps> => {
  const [password, setPassword] = React.useState<string>(user);
  const [username, setUsername] = React.useState<string>(pass);

  useEffect(() => {
    onChange(username, password);
  }, [username, password]);

  return (
    <>
      <FormControl textAlign="center" p={3} onSubmit={onSubmit} isRequired>
        <Box>
          <FormLabel>Username</FormLabel>
          <BasicInput onChange={(e) => setUsername(e.target.value)} />
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <PasswordInput onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Box>
          <SubmitButton onClick={onClick} text="Log in" />
        </Box>
      </FormControl>
    </>
  );
};
