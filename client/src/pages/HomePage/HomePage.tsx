import { Container } from 'ui';

import * as Styled from './HomePage.style';

export function HomePage() {
  return (
    <Styled.Background>
      <Container>
        <Styled.Wrapper>
          <Styled.MainBlock>
            <Styled.MainTop>кнопки</Styled.MainTop>
            <Styled.MainBottom>The World That is always with you</Styled.MainBottom>
          </Styled.MainBlock>
        </Styled.Wrapper>
      </Container>
    </Styled.Background>
  );
}
