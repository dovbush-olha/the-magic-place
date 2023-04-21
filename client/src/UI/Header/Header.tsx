import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to="/">Home page</Link>
      <Link to="/research">Research page</Link>
      <Link to="/houses">Houses page</Link>
      <Link to="/spells">Spells page</Link>
      <Link to="/settings">Settings page</Link>
      <Link to="/auth">Auth page</Link>
      <Link to="/profile">Profile page</Link>
    </header>
  );
}
