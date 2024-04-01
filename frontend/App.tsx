import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react";
export default function App() {
  return (
      <ChakraProvider>
          <RouterProvider router={router} />
      </ChakraProvider>
  );
}

