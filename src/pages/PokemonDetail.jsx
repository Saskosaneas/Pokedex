import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function PokemonDetail() {
  const { name } = useParams(); // Extract Pokémon name from URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (!pokemon) return <div>Pokémon not found!</div>;

  return (
    <div>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        style={{ width: '200px' }}
      />
      <div>
        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((t, index) => (
            <li key={index}>{t.type.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Stats:</h3>
        <ul>
          {pokemon.stats.map((s, index) => (
            <li key={index}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">Back to Pokédex</Link>
    </div>
  );
}