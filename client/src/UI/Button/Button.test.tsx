import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect } from 'vitest';
import { COLORS } from 'services/constants';
import { Button } from 'ui/Button/Button';

const onButtonClick = vi.fn();

describe('Button Component', () => {
  test('render disabled button correctly', () => {
    render(<Button isDisabled>Disabled</Button>);
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Disabled' })).toHaveStyle({
      color: COLORS.Buttons.Disabled,
      borderColor: COLORS.Buttons.Disabled,
    });
  });

  test('onClick works', async () => {
    render(<Button onClick={onButtonClick}>Press me</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Press me' }));
    expect(onButtonClick).toHaveBeenCalled();
  });

  test('onClick does not work', async () => {
    render(<Button>Press me</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Press me' }));
    expect(onButtonClick).toHaveBeenCalled(0);
  });

  it('should render primary button', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button', { name: 'Click' })).toHaveStyle({
      color: COLORS.Buttons.Brown_100,
      backgroundColor: COLORS.Buttons.Brown_20,
    });
  });
});
