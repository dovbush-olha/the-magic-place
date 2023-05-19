import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { COLORS, WEIGHT } from 'services/constants';
import Eclipse from 'assets/images/active-link.png';

export const Wrapper = styled.header`
  height: 148px;
  padding: 24px 8px;
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
  line-height: 1.5rem;
  color: ${COLORS.Main.Beige_100};
  font-weight: ${WEIGHT.bold};
  padding: 8px 21px;
  border-bottom: 1px solid;
  border-image-source: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffd480 46.87%, rgba(255, 255, 255, 0) 100%);
  border-image-slice: 1;
  position: relative;
  z-index: 2;

  &.active {
    &::before {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url(${Eclipse});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 94px;
      z-index: -1;
    }
  }
`;
