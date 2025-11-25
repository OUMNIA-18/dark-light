import { ThemeProvider } from "./utils/theme";
import Form from "./components/Form";
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Form/>
    </ThemeProvider>
  );
}

export default App;
