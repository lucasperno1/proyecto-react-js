import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/index"
import {ItemListContainer} from "./components/index"
import { HomeScreen } from './views';
import './components/NavBar/index.css';


function App() {
  return (
    <div className = "app">
    <NavBar></NavBar>
    <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
