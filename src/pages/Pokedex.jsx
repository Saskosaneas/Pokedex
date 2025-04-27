import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const limit = 16; // Pokémon per page
        const offset = (currentPage - 1) * limit;
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        setPokemon(response.data.results);
        setTotalPages(Math.ceil(response.data.count / limit));
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <div>
      <button 
  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
  disabled={currentPage === 1}
  style={{ margin: '0 1rem', padding: '0.5rem 1rem', background: '#ff0000', color: 'white', border: 'none', borderRadius: '5px' }}
>
  Previous
</button>
...
<button 
  onClick={() => setCurrentPage(prev => prev + 1)}
  disabled={currentPage === totalPages}
  style={{ margin: '0 1rem', padding: '0.5rem 1rem', background: '#00bfff', color: 'white', border: 'none', borderRadius: '5px' }}
>
  Next
</button>
      </div>
    </div>
  );
}