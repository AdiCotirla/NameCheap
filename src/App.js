
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
import CategoryShops from './Components/CategoryShops/CategoryShops';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <Router>
    <div className="App">
      <ScrollToTop>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/all' element={<AllShops show = "true"/>}/>
        <Route exact path='/books' element={<CategoryShops categorie = "books" show = "false"/>}/>
        <Route exact path='/tech' element={<CategoryShops categorie = "tech" show = "false"/>}/>
        <Route exact path='/interior' element={<CategoryShops categorie = "interior" show = "false"/>}/>
        <Route exact path='/games' element={<CategoryShops categorie = "games" show = "false"/>}/>
        <Route exact path='/credit' element={<CategoryShops categorie = "credit" show = "false"/>}/>
        <Route exact path='/fashion' element={<CategoryShops categorie = "fashion" show = "false"/>}/>
        <Route exact path='/toys' element={<CategoryShops categorie = "toys" show = "false"/>}/>
        <Route exact path='/movies' element={<CategoryShops categorie = "movies" show = "false"/>}/>
        <Route exact path='/health' element={<CategoryShops categorie = "care" show = "false"/>}/>
        <Route exact path='/perfume' element={<CategoryShops categorie = "parfum" show = "false"/>}/>
      </Routes>
      <Footer/>
      </ScrollToTop>
    </div>
    </Router>
  );
}

export default App;
