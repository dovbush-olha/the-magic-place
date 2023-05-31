import styled from 'styled-components/macro';
import { COLORS } from '../../shared/services/constants';

export const Wrapper = styled.form`
  position: relative;
`;

export const HelpInput = styled.input`
  height: 35px;
  background-color: ${COLORS.Text.Light_Beige};
  color: ${COLORS.Text.Blue};
  padding: 10px 20px;
  width: 100%;
  border: none;

  &::placeholder {
    color: ${COLORS.Text.Blue};
  }
`;

export const OwlWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
`;

export const Owl = styled.img`
  width: 204px;
  height: auto;
`;
