import styled from 'styled-components/macro';
import { ReactNode } from 'react';

type WrapperProps = {
  size: number;
};

const Wrapper = styled.div`
  max-width: ${({ size }: WrapperProps) => (size ? `${size}px` : '1080px')};
`;

type ContainerProps = {
  children: ReactNode;
  size: number;
};

export function Container({ children, size }: ContainerProps) {
  return <Wrapper size={size}>{children}</Wrapper>;
}
