import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      textAlign: 'center',
    }}>
      <h2>About This Pokédex</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Assignment for <br />
        <strong>IT-WEB2Y-S25</strong> <br />
        <strong>27/04/2025</strong>
      </p>
      <Link 
        to="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: '#ff0000',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
        }}
      >
        Back to Pokédex
      </Link>
    </div>
  );
}
