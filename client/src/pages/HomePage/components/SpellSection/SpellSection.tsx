import { Link } from 'react-router-dom';

import { Button } from 'ui/Button';
import { ReactComponent as Icon } from 'assets/icons/spell-icon.svg';
import Book1 from 'assets/images/home-page/book1.png';
import Book2 from 'assets/images/home-page/book2.png';
import Book3 from 'assets/images/home-page/book3.png';
import * as Styled from './SpellSection.style';

export function SpellSection() {
  return (
    <Styled.Wrapper>
      <Styled.BookWrapper>
        <Styled.Book1 src={Book1} alt="The book of spells" />

        <Styled.CenterPart>
          <Styled.Book2 src={Book2} alt="The book of spells" />
          <Link to="/spells">
            <Button icon={<Icon />}>Spells</Button>
          </Link>
        </Styled.CenterPart>

        <Styled.Book3 src={Book3} alt="The book of spells" />
      </Styled.BookWrapper>
    </Styled.Wrapper>
  );
}
