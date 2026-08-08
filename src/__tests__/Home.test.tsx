import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders the portfolio with the name heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /patricio cordero/i, level: 1 })
    ).toBeInTheDocument();
  });

  it('renders the email contact link', () => {
    render(<Home />);
    expect(
      screen.getByRole('link', { name: /email/i })
    ).toHaveAttribute('href', 'mailto:pcorderoe@gmail.com');
  });
});
