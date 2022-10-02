import * as React from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ButtonLink: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box mt={{ base: 2 }}>
      <Link
        onClick={() => {
          navigate("/docs");
        }}
      >
        <Button backgroundColor="red.200" color="gray.700">
          {t("documentation.button")}
        </Button>
      </Link>
    </Box>
  );
};

export default ButtonLink;
