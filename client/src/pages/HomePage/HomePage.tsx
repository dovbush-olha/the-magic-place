import { Container, Button, Spacer } from 'ui';

import { SpellSection } from 'pages/HomePage/components/SpellSection';
import { Quote } from 'modules/Quote';
import { HelpForm } from 'modules/HelpForm';
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
          <Spacer space={{ desktop: 48, tablet: 36, mobile: 30 }} />

          <Quote />
          <Spacer space={{ desktop: 220, tablet: 200, mobile: 100 }} />

          <Styled.HelpSection>
            <HelpForm />
          </Styled.HelpSection>
        </Container>
      </Styled.Wrapper>
    </Styled.Background>
  );
}
