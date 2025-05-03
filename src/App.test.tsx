import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByText(/Portfolio|포트폴리오/i)).toBeInTheDocument();
  expect(screen.getByText(/Blog|블로그/i)).toBeInTheDocument();
});
