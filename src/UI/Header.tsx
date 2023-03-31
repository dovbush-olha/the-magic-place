import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to="/home">Home page</Link>
      <Link to="/dorms">Dorms page</Link>
      <Link to="/investigate">Investigate page</Link>
      <Link to="/support">Support page</Link>
    </>
  );
}

export default Header;
