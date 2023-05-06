import styled from 'styled-components';
import { QUERIES } from 'services/constants';

type SpacerProps = {
  desktop: number;
  tablet: number;
  mobile: number;
};

const Spacer = styled.div<SpacerProps>`
  margin-bottom: ${({ desktop }) => `${desktop}px`};

  @media ${QUERIES.upToLaptop} {
    margin-bottom: ${({ desktop }) => `${desktop}px`};
  }

  @media ${QUERIES.upToTablet} {
    margin-bottom: ${({ tablet }) => `${tablet}px`};
  }

  @media ${QUERIES.upToMobile} {
    margin-bottom: ${({ mobile }) => `${mobile}px`};
  }
`;

type StyledSpacerProps = {
  space: { desktop: number; tablet: number; mobile: number };
};

export function StyledSpacer({ space }: StyledSpacerProps) {
  const { desktop, tablet, mobile } = space;
  return <Spacer desktop={desktop} tablet={tablet} mobile={mobile} />;
}
