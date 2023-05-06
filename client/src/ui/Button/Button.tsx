import { ComponentProps, MouseEventHandler, ReactNode, ReactSVGElement } from 'react';
import { ReactComponent as Icon } from 'assets/icons/house-icon.svg';
import * as Styled from './Button.style';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  icon?: ReactSVGElement;
  isDisabled?: boolean;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps) {
  const { children, type, onClick, variant, icon = <Icon />, isDisabled = false, style = {} } = props;

  return (
    <Styled.Button
      type={type || 'button'}
      onClick={(e) => (onClick ? onClick(e) : undefined)}
      variant={variant || 'primary'}
      disabled={isDisabled}
      style={style}
    >
      {icon}
      {children}
    </Styled.Button>
  );
}
