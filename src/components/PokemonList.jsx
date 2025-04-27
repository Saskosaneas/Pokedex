import { Link } from 'react-router-dom';

export default function PokemonList({ pokemon }) {
  // Helper to extract ID from URL
  const getPokemonId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2]; // second last part is the ID
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '1rem',
      padding: '1rem'
    }}>
      {pokemon.map((p) => {
        const id = getPokemonId(p.url);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return (
          <Link
            to={`/pokemon/${p.name}`}
            key={p.name}
            style={{
              textDecoration: 'none',
              color: 'black',
              background: '#f5f5f5',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <img src={imageUrl} alt={p.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h3 style={{ marginTop: '0.5rem' }}>
              {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
