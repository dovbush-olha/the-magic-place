import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './Root';

test('show links', () => {
  render(
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(4);
});
