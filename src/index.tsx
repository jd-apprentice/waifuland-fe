import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const container = document.getElementById('root') as HTMLElement;
const root = container && createRoot(container);

root.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>,
);
