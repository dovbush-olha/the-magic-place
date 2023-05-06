import styled from 'styled-components/macro';
import { ReactNode } from 'react';

type WrapperProps = {
  size: number;
};

const Wrapper = styled.div`
  max-width: ${({ size }: WrapperProps) => `${size}px`};
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
`;

type ContainerProps = {
  children: ReactNode;
  size?: number;
};

export function StyledContainer({ children, size = 1080 }: ContainerProps) {
  return <Wrapper size={size}>{children}</Wrapper>;
}
