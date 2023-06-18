import { memo, ReactNode } from 'react';
import * as Styled from './SocialLink.style';

interface SocialLinkProps {
  to: string;
  icon: ReactNode;
}

export const SocialLink = memo(function SocialLink({ to, icon }: SocialLinkProps) {
  return (
    <Styled.Wrapper to={to} target="_blank">
      {icon}
    </Styled.Wrapper>
  );
});
