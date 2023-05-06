import styled from 'styled-components';
import { QUERIES } from 'services/constants';

type StyledSpacerProps = {
  desktop: number;
  tablet: number;
  mobile: number;
};

const StyledSpacer = styled.div<StyledSpacerProps>`
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

type SpacerProps = {
  space: { desktop: number; tablet: number; mobile: number };
};

export function Spacer({ space }: SpacerProps) {
  const { desktop, tablet, mobile } = space;
  return <StyledSpacer desktop={desktop} tablet={tablet} mobile={mobile} />;
}
