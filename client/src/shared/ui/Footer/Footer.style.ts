import styled from 'styled-components/macro';
import { COLORS, WEIGHT } from '../../services/constants';

export const Wrapper = styled.footer`
  background-color: ${COLORS.Background.DarkBlue};
  backdrop-filter: blur(5px);
  padding: 48px 0 50px;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const FindUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1 1 15%;
`;

export const Socials = styled.div`
  flex: 1 1 15%;
  display: flex;
  align-items: center;
  gap: 12px;

  & * {
    fill: ${COLORS.Buttons.Brown_100};
  }
`;

export const SloganWrapper = styled.div`
  flex: 1 0 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slogan = styled.img`
  height: 64px;
`;

export const Authors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1 1 15%;
`;

export const Text = styled.p`
  font-weight: ${WEIGHT.medium};
  font-size: 12px;
  line-height: 15px;
`;

export const Sitemap = styled(Authors)``;

export const MainMenu = styled(Text)``;

export const Depository = styled(Text)``;

export const AboutUs = styled(Authors)``;

export const Title = styled.h5`
  font-size: var(--14px);
  line-height: 21px;
  font-family: 'Gentium Book Plus', serif;
  font-weight: ${WEIGHT.bold};
`;

export const CopyRight = styled(Title)`
  flex: 1 1 15%;
  display: flex;
  align-items: center;
  font-family: 'Harry Potter';
`;
