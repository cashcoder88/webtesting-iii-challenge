// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from '../display/Display.js'


describe('Display', () => {
    it('defaults to unlocked and open', () => {
        // const dash = render(<Dashboard />
       
        const actual = Display.defaultProps
        const expected = {
            locked: false,
            closed: false
        }

        expect(actual).toEqual(expected);
    });
});




/*
- defaults to `unlocked` and `open` [x]


*/