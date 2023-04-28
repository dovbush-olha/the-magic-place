import styled from 'styled-components';
import { QUERIES } from '../../constants';

const StyledSpacer = styled.div`
  margin-bottom: ${({ desktop }) => `${desktop}px`};

  @media ${QUERIES.upToLaptop} {
    margin-bottom: ${({ desktop }) => `${desktop}px`};
  }

  @media ${QUERIES.upToTablet} {
    margin-bottom: ${({ tablet, desktop }) => (tablet ? `${tablet}px` : `${desktop * 0.6}px`)};
  }

  @media ${QUERIES.upToMobile} {
    margin-bottom: ${({ mobile, desktop }) => (mobile ? `${mobile}px` : `${desktop * 0.4}px`)};
  }
`;

type SpacerProps = {
  space: { desktop: number } | { desktop: number; tablet: number; mobile: number };
};

export function Spacer({ space }: SpacerProps) {
  const { desktop, tablet, mobile } = space;
  return <StyledSpacer desktop={desktop} tablet={tablet} mobile={mobile} />;
}
