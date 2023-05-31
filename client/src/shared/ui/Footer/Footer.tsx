import { Link } from 'react-router-dom';
import Slogan from '../../assets/icons/slogan.png';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin-icon.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook-icon.svg';
import { Container } from '../Layout';

import * as Styled from './Footer.style';

export function Footer() {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <div style={{ flex: '1 1 15%' }} />
          <Styled.FindUs>
            <Styled.Title>Find Us</Styled.Title>
            <Styled.Socials>
              <Link to="https://www.facebook.com/">
                <Facebook />
              </Link>
              <Link to="https://www.linkedin.com/">
                <LinkedIn />
              </Link>
            </Styled.Socials>
          </Styled.FindUs>

          <Styled.Authors>
            <Styled.Title>Authors</Styled.Title>
            <Styled.Text>John Doe</Styled.Text>
            <Styled.Text>John Doe</Styled.Text>
          </Styled.Authors>

          <Styled.SloganWrapper>
            <Styled.Slogan src={Slogan} alt="Slogan" />
          </Styled.SloganWrapper>

          <Styled.Sitemap>
            <Styled.Title>Sitemap</Styled.Title>
            <Styled.MainMenu>Main Menu</Styled.MainMenu>
            <Styled.Depository>Depository</Styled.Depository>
          </Styled.Sitemap>

          <Styled.AboutUs>
            <Styled.Title>About Us</Styled.Title>
            <Styled.Text>Terms of use</Styled.Text>
            <Styled.Text>Cookies</Styled.Text>
          </Styled.AboutUs>

          <Styled.CopyRight>&copy; Harry Potter UA</Styled.CopyRight>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
}
