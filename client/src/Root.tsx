import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import BGImage from 'assets/images/background-image.jpg';
import { Header, Footer } from 'ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
`;

export function Root() {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Wrapper>
  );
}
