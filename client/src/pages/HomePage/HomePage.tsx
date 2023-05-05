import { Button, Spacer } from 'ui';
import * as Styled from './HomePage.style';

export function HomePage() {
  return (
    <Styled.Wrapper>
      <Spacer space={{ desktop: 40, tablet: 30, mobile: 20 }} />
      <Button>Houses</Button>
    </Styled.Wrapper>
  );
}
