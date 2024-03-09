import { render, screen } from '@testing-library/react';
import App from './App';

test('Records by Suburb Button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Records by Suburb/i);
  expect(linkElement).toBeInTheDocument();
});
