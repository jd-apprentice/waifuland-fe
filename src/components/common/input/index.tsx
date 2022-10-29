import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

/**
 * @description Password input component
 * @param { React.ChangeEvent<HTMLInputElement> } onChange - Input change event
 * @returns {React.ReactElement<InputProps>} Password input component
 */

export const PasswordInput: React.FC<InputProps> = ({
  onChange,
  placeHolder,
}: InputProps): React.ReactElement<InputProps> => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeHolder}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

/**
 * @description This is a component that renders a input field.
 * @param { React.ChangeEvent<HTMLInputElement> } onChange - The event that triggered the function
 * @param { string } placeHolder - The placeholder text
 * @returns { React.ReactElement<InputProps> } Returns a input field
 */

export const BasicInput: React.FC<InputProps> = ({
  onChange,
  placeHolder,
}: InputProps): React.ReactElement<InputProps> => {
  return <Input placeholder={placeHolder} onChange={onChange} />;
};
