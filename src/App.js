import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Radio from "./pages/index";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Box
          w="100%"
          h="1000px"
          bgGradient={[
            "linear(to-t, blue.200, teal.500)",
            "linear(to-tr, teal.300,yellow.400)",
            "linear(to-b, orange.100, purple.300)",
          ]}>
          <Radio />
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
