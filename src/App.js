import "./App.css";
import Radio from "./pages/Radio/index";
import { ChakraProvider,Box } from "@chakra-ui/react"
import { RecipePage } from './pages';
import { NavBar } from './containers';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
          <Radio />
      </div>
      <NavBar />
      <RecipePage />
    </ChakraProvider>
  );
}

export default App;
