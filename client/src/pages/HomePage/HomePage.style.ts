import styled from 'styled-components/macro';
import BGImage from 'assets/images/background-image.jpg';

export const Wrapper = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  height: 1000px;
`;
