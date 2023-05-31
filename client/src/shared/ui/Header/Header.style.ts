import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { WEIGHT } from '../../services/constants';

export const Wrapper = styled.header`
  height: 148px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  gap: 2rem;
`;

export const NavbarLink = styled(NavLink)`
  font-size: var(--20px);
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gentium Book Plus', serif;
  line-height: 1.5rem;
  font-weight: ${WEIGHT.bold};
  padding: 5.5px 0;
  border-bottom: 1px solid;
  border-image-source: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffd480 46.87%, rgba(255, 255, 255, 0) 100%);
  border-image-slice: 1;
  position: relative;

  &.active {
    &::before {
      position: absolute;
      content: '';
      top: 7px;
      bottom: 7px;
      left: 7px;
      right: 7px;
      background-color: #b28f47;
      filter: blur(24px);
      z-index: -1;
    }
  }
`;

export const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const Blanc = styled.div`
  width: 120px;
`;
