import styled from 'styled-components/macro';
import { WEIGHT } from '../../shared/services/constants';

export const Figure = styled.figure`
  max-width: 653px;
  margin: 0 auto;
`;

export const Blockquote = styled.blockquote`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 17px;
`;

export const Figcaption = styled.figcaption`
  font-weight: ${WEIGHT.bold};
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;
