import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Header, Footer } from './UI';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
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
