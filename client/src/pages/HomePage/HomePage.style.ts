import styled from 'styled-components/macro';
import BGImage from 'assets/images/home-page/main-image.png';
import RightImage from 'assets/images/home-page/right-image.png';
import LeftImage from 'assets/images/home-page/left-image.png';

export const Wrapper = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  min-height: 100vh;
`;

export const Background = styled.div`
  position: relative;
  width: 100%;

  &::after {
    position: absolute;
    content: '';
    right: 0;
    top: 650px;
    background-image: url(${RightImage});
    background-repeat: no-repeat;
    background-position: center top;
    width: 290px;
    height: 494px;
    mix-blend-mode: color-dodge;
  }

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 600px;
    background-image: url(${LeftImage});
    background-repeat: no-repeat;
    background-position: center top;
    width: 450px;
    height: 677px;
    mix-blend-mode: color-dodge;
  }
`;

export const MainBlock = styled.div`
  border: 2px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 246, 229, 0) 43.75%, #fff6e5 100%);
`;

export const MainTop = styled.div``;

export const MainBottom = styled.div``;
