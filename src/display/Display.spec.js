// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';



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

    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        const {getByTestId} = render(<Display />)
        const closedOpen = getByTestId(/closedopen/i);
        const lockedUnlocked = getByTestId(/lockedunlocked/i)
        expect(lockedUnlocked).toBeTruthy();
        expect(closedOpen).toBeTruthy();
    });
});




/*
- defaults to `unlocked` and `open` [x]
- displays if gate is open/closed and if it is locked/unlocked []
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise []
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise []
- when `locked` or `closed` use the `red-led` class []
- when `unlocked` or `open` use the `green-led` class []
*/