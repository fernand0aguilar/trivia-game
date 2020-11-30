import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Trivia Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
