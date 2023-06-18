import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS } from 'shared/services/constants';

export const Wrapper = styled(Link)`
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${COLORS.Buttons.Beige_20};
  display: grid;
  place-content: center;
  cursor: pointer;

  & svg path {
    fill: ${COLORS.Buttons.Brown_100};
  }
`;
