import styled from 'styled-components/macro';
import { ReactNode } from 'react';

const containerWidth = window.innerWidth < 1280 ? '1080px' : '80vw';

const Wrapper = styled.div`
  max-width: ${containerWidth};
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
`;

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>;
}
