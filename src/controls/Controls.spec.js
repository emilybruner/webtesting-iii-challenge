import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Controls from './Controls';

test('dashboard renders without crashing', () => {
    render(<Controls />)
})

test("provide buttons to toggle the `closed` and `locked` states", () => {
    const {getAllByText} = render(<Controls />);
    getAllByText(/gate/i);
});

test("has buttons", () => {
    const { baseElement } = render(<Controls />);
    const buttons = baseElement.querySelectorAll("button");
    expect(buttons).toBeTruthy();
  });


  test("the closed toggle button is disabled if the gate is locked", () => {
    const toggleLocked = jest.fn();
    const {getByText} = render(<Controls  toggleLocked={toggleLocked}/>);
    const lockButton = getByText('Lock Gate');
    fireEvent.click(lockButton);
    expect(toggleLocked).not.toHaveBeenCalled();
});

test("the locked toggle button is disabled if the gate is open", () => {
    const toggleClosed = jest.fn();
    const {getByText} = render(<Controls locked={true} toggleClosed={toggleClosed}/>);
    const actionButton = getByText("Close Gate");
    fireEvent.click(actionButton);
    expect(toggleClosed).not.toHaveBeenCalled()
})

test('buttons text changes to reflect the state the door will be in if clicked', () => {
    let mockState = {
        locked: false,
        closed: false
    };
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();
    const { getAllByText} = render(
        <Controls
        locked={mockState.locked}
        closed={mockState.closed}
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
        />
    )
    const [toggleLock, toggleClose] = getAllByText(/gate/i);
    fireEvent.click(toggleClose);
    expect(toggleClosed).toHaveBeenCalled();
    expect(toggleClose.textContent).toBe("Close Gate");
    expect(toggleLock.textContent).toBe('Lock Gate');
});
  