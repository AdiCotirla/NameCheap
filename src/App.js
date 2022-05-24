
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Menu/Menu';
import AllShops from './Components/AllShops/AllShops';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/all' element={<AllShops/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
