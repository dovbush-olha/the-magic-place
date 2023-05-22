import { getRandomQuote } from 'modules/Quote/helpers/functions';
import { quotesEN } from '../../../DB/Quotes';
import * as Styled from './Quote.style';

export function Quote() {
  return (
    <Styled.Figure>
      <Styled.Blockquote>{getRandomQuote(quotesEN).text}</Styled.Blockquote>
      <Styled.Figcaption> &copy; {getRandomQuote(quotesEN).author}</Styled.Figcaption>
    </Styled.Figure>
  );
}
