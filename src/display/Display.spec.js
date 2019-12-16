import React from 'react';
import { render, getByTestId } from "@testing-library/react";
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

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const {getByText} = render(<Display closed={true}/>);
    getByText('Closed')
});

test("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const {getByText} = render(<Display locked={true}/>);
    getByText("Locked")
});

test('displays if gate is open/closed and if it is unlocked/locked', () => {
    const {getByText} = render(<Display />);
    getByText(/open/i);
    getByText(/unlocked/i);
    getByText(/locked/i);
})