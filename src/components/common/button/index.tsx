import { Button } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  variant?: string;
  color?: string;
  loadingText?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

export const SubmitButton: React.FC<ButtonProps> = ({
  color = "teal",
  variant = "outline",
  loadingText = "Loading...",
  isLoading,
  text,
  onClick,
}: ButtonProps): React.ReactElement<ButtonProps> => {
  return (
    <Button
      isLoading={isLoading}
      loadingText={loadingText}
      colorScheme={color}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
