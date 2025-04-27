import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import About from './pages/About';
import Navbar from './components/NavBar';
import PokemonDetail from './pages/PokemonDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;