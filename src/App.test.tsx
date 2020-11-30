import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Trivia Game/i);
  expect(linkElement).toBeInTheDocument();
});
