import { Container } from 'ui/Container';
import * as Styled from './Header.style';

export function Header() {
  return (
    <Container>
      <Styled.Wrapper>
        <Styled.NavBar>
          <Styled.NavbarLink to="/">Home</Styled.NavbarLink>
          <Styled.NavbarLink to="/houses">Logo</Styled.NavbarLink>

          <Styled.RightNav>
            <Styled.NavbarLink to="/profile">Profile</Styled.NavbarLink>
            <Styled.NavbarLink to="/settings">Settings</Styled.NavbarLink>
          </Styled.RightNav>
        </Styled.NavBar>
      </Styled.Wrapper>
    </Container>
  );
}
