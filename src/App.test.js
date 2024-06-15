import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';  

test('renders the application with the correct title', () => {
  render(<App />);
  
   screen.debug();
});
