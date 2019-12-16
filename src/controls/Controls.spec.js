import React from 'react';
import { render } from "@testing-library/react";
import Controls from './Controls';

test('dashboard renders without crashing', () => {
    render(<Controls />)
})

