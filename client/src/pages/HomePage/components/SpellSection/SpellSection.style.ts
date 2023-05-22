import styled from 'styled-components/macro';
import { QUERIES } from 'services/constants';

export const Wrapper = styled.section`
  width: 100%;
`;

export const BookWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;

  @media ${QUERIES.upToMobile} {
    justify-content: center;
  }
`;

export const Book1 = styled.img`
  object-fit: contain;
  object-position: left 0 bottom -10px;
  max-width: 210px;

  @media ${QUERIES.upToMobile} {
    display: none;
  }
`;

export const Book2 = styled(Book1)`
  object-position: top center;

  @media ${QUERIES.upToMobile} {
    display: block;
  }
`;

export const Book3 = styled(Book1)`
  object-position: right 0 bottom -10px;
`;

export const CenterPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
