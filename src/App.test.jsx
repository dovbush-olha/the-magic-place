import { render, screen } from '@testing-library/react';
import App from './App';

test('render The Magic Place text', () => {
  render(<App />);
  const text = screen.getByText(/the magic place/i);
  expect(text).toBeInTheDocument();
});
