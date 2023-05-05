import styled, { css } from 'styled-components/macro';
import { COLORS, WEIGHT } from 'services/constants';

const COLOR = {
  primary: css`
    color: ${COLORS.Buttons.Brown_100};
    background-color: ${COLORS.Buttons.Brown_20};
    border-image-source: linear-gradient(to right, ${COLORS.Buttons.Brown_100}, #ffd480);

    &:hover,
    &:active {
      box-shadow: 0 0 8px hsla(40, 100%, 90%, 0.8);
    }

    &:active {
      background-color: hsla(40, 43%, 49%, 0.4);
    }
  `,
};

const DISABLED = css`
  background-color: hsla(0, 0%, 80%, 0.1);
  color: ${COLORS.Buttons.Disabled};
  border: 1px solid ${COLORS.Buttons.Disabled};

  & svg path {
    fill: ${COLORS.Buttons.Disabled};
  }

  &:hover,
  &:active {
    box-shadow: none;
    background-color: hsla(0, 0%, 80%, 0.1);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 37px;
  border: 1px solid;
  border-image-slice: 1;
  text-transform: uppercase;
  font-family: 'Gentium Book Plus';
  font-weight: ${WEIGHT.bold};
  cursor: pointer;
  transition: all 200ms ease-out;

  ${(props) => props.variant && COLOR[props.variant]}
  ${(props) => props.disabled && DISABLED}
`;
