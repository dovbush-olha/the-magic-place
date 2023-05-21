import Logo from 'assets/icons/logo-icon.png';
import { Container } from '../Layout';
import * as Styled from './Header.style';

export function Header() {
  return (
    <Container>
      <Styled.Wrapper>
        <Styled.NavBar>
          <Styled.NavbarLink to="/">Home</Styled.NavbarLink>
          <Styled.LogoWrapper>
            <Styled.Logo src={Logo} alt="Logo Icon" />
          </Styled.LogoWrapper>

          <Styled.RightNav>
            <Styled.NavbarLink to="/profile">Profile</Styled.NavbarLink>
            <Styled.NavbarLink to="/settings">Settings</Styled.NavbarLink>
          </Styled.RightNav>
        </Styled.NavBar>
      </Styled.Wrapper>
    </Container>
  );
}
