import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to="/home">Main page</Link>
      <Link to="/research">Research page</Link>
      <Link to="/homes">Homes page</Link>
      <Link to="/spells">Spells page</Link>
      <Link to="/settings">Settings page</Link>
      <Link to="/auth">Auth page</Link>
      <Link to="/profile">Profile page</Link>
    </header>
  );
}

export default Header;
