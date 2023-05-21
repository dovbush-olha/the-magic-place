import { Container, Button } from 'ui';

import { SpellSection } from 'pages/HomePage/components/SpellSection';
import * as Styled from './HomePage.style';

export function HomePage() {
  return (
    <Styled.Background>
      <Styled.Wrapper>
        <Container>
          <Styled.MainBlock>
            <Styled.MainTop>
              <Button>Research</Button>
              <Styled.Welcome>Welcome to Hogwarts</Styled.Welcome>
              <Button>Houses</Button>
            </Styled.MainTop>

            <Styled.MainBottom>
              <Styled.WorldText> The world that is always with you...</Styled.WorldText>
            </Styled.MainBottom>
          </Styled.MainBlock>

          <SpellSection />
        </Container>
      </Styled.Wrapper>
    </Styled.Background>
  );
}
