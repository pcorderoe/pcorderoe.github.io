import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders Contact me link', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
  });
});
