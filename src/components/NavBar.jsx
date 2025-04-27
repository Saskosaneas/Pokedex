import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#ff0000' }}>Choose Your Pokémon!</h1>
      <Link 
        to="/about" 
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#333',
          color: 'white',
          borderRadius: '5px',
          textDecoration: 'none'
        }}
      >
        About Pokédex
      </Link>
    </nav>
  );
}