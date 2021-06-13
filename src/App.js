import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Radio from "./pages/Radio/index";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
          <Radio />
      </div>
    </ChakraProvider>
  );
}

export default App;
