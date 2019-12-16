import React from 'react';
import { render } from "@testing-library/react";
import Display from './Display';

test('dashboard renders without crashing', () => {
    render(<Display />)
})

test('cannot be closed or open if it is locked', () => {
    const {getByText, rerender} = render(<Display locked />);
    getByText(/Locked/i);

    rerender(<Display closed />);
    getByText(/Closed/i)
})