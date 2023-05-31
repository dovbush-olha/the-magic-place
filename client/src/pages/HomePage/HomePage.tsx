import { Container, Button, Spacer } from 'shared/ui';

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
              <Styled.ContentBlock>
                <Button>Research</Button>
                <Styled.Text>
                  Explore the world of magic with us. Meet the greatest school of witchcraft and wizardry. Learn about
                  the unique talents of students and the outstanding achievements of professors.
                </Styled.Text>
              </Styled.ContentBlock>

              <Styled.Welcome>Welcome to Hogwarts</Styled.Welcome>

              <Styled.ContentBlock>
                <Button>Houses</Button>
                <Styled.HousesText>
                  Find the house that will become your family for the duration of your studies. The Sorting Hat will
                  show you the way. And if you are not sure about the hat solution, you can make your choice.
                </Styled.HousesText>
              </Styled.ContentBlock>
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
