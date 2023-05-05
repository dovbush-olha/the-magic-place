import { MouseEventHandler, ReactNode, ReactSVGElement } from 'react';
import { ReactComponent as Icon } from 'assets/icons/house-icon.svg';
import * as Styled from './Button.style';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick: (event: MouseEventHandler<HTMLButtonElement>) => void;
  variant: 'primary' | 'secondary';
  icon: ReactSVGElement;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps) {
  const { children, type, onClick, variant = 'primary', icon = <Icon />, disabled = false, style = {} } = props;

  return (
    <Styled.Button
      type={type}
      onClick={(e) => (onClick ? onClick(e) : undefined)}
      variant={variant}
      icon={icon}
      disabled={disabled}
      style={style}
    >
      {icon}
      {children}
    </Styled.Button>
  );
}
