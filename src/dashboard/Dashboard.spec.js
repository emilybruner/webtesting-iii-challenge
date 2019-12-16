import React from 'react';
import { render } from "@testing-library/react";
import Dashboard from './Dashboard';


test('dashboard renders without crashing', () => {
    render(<Dashboard />)
})



test("Dashboard shows the controls and display", () => {
  const { getByText } = render(<Dashboard />);

  getByText(/Unlocked/i);
  getByText(/Open/i);
  getByText(/Lock Gate/i);
  getByText(/Close Gate/i);
  
}); 
