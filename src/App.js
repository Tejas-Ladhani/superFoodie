import "./App.css";
import Radio from "./pages/Radio/index";
import { ChakraProvider,Box } from "@chakra-ui/react"
import { RecipePage } from './pages';
import { NavBar } from './containers';
import Music from './containers/Music/index.js';
function App() {
  return (
    <ChakraProvider>
          <NavBar />
          <Music />
          <div className="App">
          <Radio />
          <RecipePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
