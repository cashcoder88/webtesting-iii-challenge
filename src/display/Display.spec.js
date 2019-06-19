// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display.js';
import Dashboard from '../dashboard/Dashboard'
import '@testing-library/react/cleanup-after-each';


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
        const closedOpen = getByTestId(/123/i);
        const lockedUnlocked = getByTestId(/abc/i)
        expect(lockedUnlocked).toBeTruthy();
        expect(closedOpen).toBeTruthy();
    });

    it("displays 'Closed' if the `closed` prop is `true`", () => {
        const {getByText} = render(<Display closed={true} />)
        expect(getByText(/Closed/i)).toBeTruthy();
    });
    
   
    it("and 'Open' if otherwise", () => {
        const {getByText} = render(<Display closed={false} />)
        expect(getByText(/Open/i)).toBeTruthy();
    });

    it('displays Locked if the locked prop is true', () => {
        const {getByText} = render(<Display locked={true} />)
        expect(getByText(/Locked/)).toBeTruthy();
    });
    it("Unlocked if otherwise", () => {
        const {getByText} = render(<Display locked={false} />)
        expect(getByText(/Unlocked/)).toBeTruthy();
    });
    it('when `locked` or `closed` use the `red-led` class ', () => {
        // const {getByText} = render(<Display locked={true} closed={true}/>)
        // expect(getByText)
        const { container } = render(<Display locked={false} closed={false} />)
        const divs = container.getElementsByClassName('green-led')
        expect(divs.length).toBe(2)
    });
    it('when `unlocked` or `open` use the `green-led` class', () => {
        // const {getByText} = render(<Display locked={true} closed={true}/>)
        // expect(getByText)
        const { container } = render(<Display locked={true} closed={true} />)
        const divs = container.getElementsByClassName('red-led')
        expect(divs.length).toBe(2)
    });
});




/*
- defaults to `unlocked` and `open` [x]
- displays if gate is open/closed and if it is locked/unlocked [x]
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise [x]
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise [x]
- when `locked` or `closed` use the `red-led` class [x]
- when `unlocked` or `open` use the `green-led` class [x]
*/