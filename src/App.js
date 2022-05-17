
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Home/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
