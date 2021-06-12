import './App.css';
import { ChakraProvider,Box } from "@chakra-ui/react"
import { RecipePage } from './pages';
import { NavBar } from './containers';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
    <RecipePage />
    </ChakraProvider>
  );
}

export default App;
