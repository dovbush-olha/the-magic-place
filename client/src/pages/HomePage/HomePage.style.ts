import styled from 'styled-components/macro';
import BGImage from 'assets/images/home-page/main-image.png';
import RightImage from 'assets/images/home-page/right-image.png';
import LeftImage from 'assets/images/home-page/left-image.png';

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 10%;
    background-image: url(${RightImage});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    height: 40%;
    width: 20%;
    mix-blend-mode: color-dodge;
  }

  &::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    background-image: url(${LeftImage});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    height: 53%;
    width: 25%;
    mix-blend-mode: color-dodge;
  }
`;

export const Wrapper = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-position: center top -85px;
  background-size: contain;
  min-height: 100%;
`;

export const MainBlock = styled.div`
  height: 100%;
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
`;

export const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  padding-top: 60px;
`;

export const MainBottom = styled.div`
  margin: 0 200px;
  padding: 48px;
  padding-top: 45%;
  border: 2px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 246, 229, 0) 43.75%, #fff6e5 100%);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: '';
    border: 2px solid;
    border-image-source: linear-gradient(225deg, #fff6e5 0.3%, rgba(255, 246, 229, 0) 39.37%);
    border-image-slice: 1;
    bottom: -80px;
    width: 114px;
    height: 114px;
  }

  &::before {
    left: -80px;
  }

  &::after {
    right: -80px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;

export const Welcome = styled.h1``;

export const WorldText = styled.h2``;
