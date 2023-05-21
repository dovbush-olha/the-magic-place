import { Container, Button, Spacer } from 'ui';

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

          <Spacer space={{ desktop: 150, tablet: 140, mobile: 100 }} />

          <SpellSection />
        </Container>
      </Styled.Wrapper>
    </Styled.Background>
  );
}
