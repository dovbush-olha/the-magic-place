import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { COLORS, WEIGHT } from 'services/constants';

export const Wrapper = styled.header`
  height: 148px;
  padding: 0 8px 24px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavbarLink = styled(NavLink)`
  font-size: var(--20px);
  font-family: 'Gentium Book Plus', serif;
  line-height: 1.5rem;
  color: ${COLORS.Main.Beige_100};
  font-weight: ${WEIGHT.bold};
  padding: 8px 21px;
  border-bottom: 1px solid;
  border-image-source: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffd480 46.87%, rgba(255, 255, 255, 0) 100%);
  border-image-slice: 1;
  position: relative;

  &.active {
    &::before {
      position: absolute;
      content: '';
      top: 6px;
      bottom: 6px;
      left: 6px;
      right: 6px;
      background-color: #b28f47;
      filter: blur(24px);
      z-index: -1;
    }
  }
`;

export const LogoWrapper = styled.div`
  margin-left: 100px;
`;

export const Logo = styled.img`
  width: 120px;
`;
