import styled from 'styled-components/macro';
import { SocialLink } from 'shared/ui/SocialLink';
import { ReactComponent as FacebookIcon } from 'shared/assets/icons/facebook-plain.svg';
import { ReactComponent as LinkedinIcon } from 'shared/assets/icons/linkedin-plain.svg';
import { ReactComponent as BehanceIcon } from 'shared/assets/icons/behance-icon.svg';

const Wrapper = styled.div`
  position: absolute;
  right: -46px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export function SocialLinkList() {
  return (
    <Wrapper>
      <SocialLink to="https://www.facebook.com/" icon={<LinkedinIcon />} />
      <SocialLink to="https://www.facebook.com/" icon={<BehanceIcon />} />
      <SocialLink to="https://www.facebook.com/" icon={<FacebookIcon />} />
    </Wrapper>
  );
}
