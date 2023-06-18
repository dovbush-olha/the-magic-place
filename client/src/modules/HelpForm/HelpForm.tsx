import OwlImage from '../../shared/assets/images/home-page/owl-with-letter.png';
import * as Styled from './HelpForm.style';

export function HelpForm() {
  return (
    <Styled.Wrapper>
      <Styled.HelpInput type="text" placeholder="Need help? Enter your request..." />
      <Styled.OwlWrapper>
        <Styled.Owl src={OwlImage} alt="owl" />
      </Styled.OwlWrapper>
    </Styled.Wrapper>
  );
}
