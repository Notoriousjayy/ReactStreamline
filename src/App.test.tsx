/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the heading and description', () => {
  // Render the App component
  render(<App />);
  
  // Check for the heading
  const headingElement = screen.getByText(/Welcome to ReactStreamline/i);
  expect(headingElement).toBeInTheDocument();

  // Check for the paragraph
  const descriptionElement = screen.getByText(/Your minimal React \+ TypeScript application\./i);
  expect(descriptionElement).toBeInTheDocument();
});
