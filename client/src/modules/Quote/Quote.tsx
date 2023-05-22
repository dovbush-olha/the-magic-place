import { getRandomQuote } from 'modules/Quote/helpers/functions';
import { quotesEN } from '../../../DB/Quotes';
import * as Styled from './Quote.style';

export function Quote() {
  const quote = getRandomQuote(quotesEN);

  return (
    <Styled.Figure>
      <Styled.Blockquote>{quote.text}</Styled.Blockquote>
      <Styled.Figcaption> &copy; {quote.author}</Styled.Figcaption>
    </Styled.Figure>
  );
}
