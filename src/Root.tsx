import { Outlet } from 'react-router-dom';
import { Header, Footer } from './UI';

export function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
