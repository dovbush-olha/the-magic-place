import { useMemo, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { Header, Footer } from '../shared/ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 1;
  position: relative;
  width: 100%;
  min-height: 1500px;
  overflow: auto;
`;

const Main = styled.main`
  flex-grow: 1;
  min-height: 100%;
`;

export function Root() {
  const options = useMemo(
    () => ({
      preset: 'stars',
      background: {
        color: '#000616',
      },
      particles: {
        number: {
          value: 2590,
        },
        move: {
          enable: true,
          directions: 'none',
          speed: 0.08,
          random: false,
          straight: false,
        },
        color: {
          value: '#717981',
        },
        collisions: {
          enable: true,
        },
        size: {
          value: { min: 0.01, max: 1.4 },
        },
      },
    }),
    []
  );

  const ParticlesInit = useCallback(async (engine: any) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <>
      <Wrapper>
        <Header />

        <Main>
          <Outlet />
        </Main>

        <Footer />
      </Wrapper>
      <Particles options={options} init={ParticlesInit} />
    </>
  );
}
