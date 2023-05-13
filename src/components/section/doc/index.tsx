import { Box, Code, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { documentationText } from "../../../const";
import { CodeBox } from "../../../components/common/codeBox";


const DocStyles = {
    display: "flex",
    justifyContent: "center",
    m: 3,
};

export const Doc = () => {
    const { t } = useTranslation();

    return (
        <>
            <Box sx={DocStyles}>
                <Heading fontSize={{ base: "md", lg: "2xl" }}>
                    {t("documentation.title")}
                </Heading>
            </Box>
            <Box
                display="flex"
                flexDirection={{ base: "column" }}
                textAlign="center"
                mb={3}
            >
                <Heading fontSize={{ base: "2xl" }}>
                    {t("documentation.routes")}
                </Heading>
                {Object.values(documentationText).map((item, index) => (
                    <CodeBox
                        key={index}
                        method={item.method}
                        text={item.text}
                        endpoint={item.endpoint}
                    />
                ))}
                <Text
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    fontFamily="cursive"
                    mt={1}
                >
                    Base URL is{" "}
                    <Code fontSize={{ base: "10px", md: "15px", lg: "20px" }}>
                        https://waifuland.jonathan.com.ar
                    </Code>
                </Text>
            </Box>
        </>
    );
};
