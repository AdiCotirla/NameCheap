
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Home/>
    </div>
    </Router>
  );
}

export default App;
