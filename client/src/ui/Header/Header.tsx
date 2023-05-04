import { Link } from 'react-router-dom';
import * as Styled from './Header.style';

export function Header() {
  return (
    <Styled.Wrapper
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </Styled.Wrapper>
  );
}
