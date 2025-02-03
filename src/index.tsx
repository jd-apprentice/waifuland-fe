import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import App from './App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <ChakraProvider value={defaultSystem}>
        <App />
    </ChakraProvider>,
);

