import { MouseEventHandler, ReactNode } from 'react';
import * as Styled from './Button.style';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
  variant: 'primary' | 'secondary';
}

export function Button({ children, type = 'button', onClick, variant = 'primary' }: ButtonProps) {
  return (
    <Styled.Button type={type} onClick={(e) => (onClick ? onClick(e) : undefined)} variant={variant}>
      {children}
    </Styled.Button>
  );
}
