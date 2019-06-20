// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls.js'
import { fireEvent } from '@testing-library/react/dist';
import 'jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each';

describe('Controls', () => {
    it('cannot be closed or opened if it is locked', () => {
        const { getByText, queryByText} = render(<Controls locked={true} closed={true} />);
        
        const button = getByText(/Open gate/i);
        

        fireEvent.click(button);
    
        expect(queryByText(/open gate/i)).toBeTruthy();
    });

    it('provide buttons to toggle the `closed` and `locked` states', () => {
        const { container } = render(<Controls />)
        const buttons = container.getElementsByClassName('toggle-btn')
        expect(buttons.length).toBe(2);

    });

    it("buttons' text changes to reflect the state the door will be in if clicked", () => {
        const {getByText} = render(<Controls closed={false}/>)

        const button = getByText(/Close gate/i)


        expect(button).toBeTruthy();

    });

    it("buttons' text changes to reflect the state the door will be in if clicked, 2", () => {
        const {getByText} = render(<Controls closed={true}/>)

        const button = getByText(/Open gate/i)


        expect(button).toBeTruthy();

    });

    it("buttons' text changes to reflect the state the door will be in if clicked, 3", () => {
        const {getByText} = render(<Controls locked={false}/>)

        const button = getByText(/Lock gate/i)


        expect(button).toBeTruthy();

    });
    it("buttons' text changes to reflect the state the door will be in if clicked, 4", () => {
        const {getByText} = render(<Controls locked={true}/>)

        const button = getByText(/Unlock gate/i)


        expect(button).toBeTruthy();

    });

    it('the closed toggle button is disabled if the gate is locked', () => {
        const {getByTestId} = render(<Controls locked={true}/>)

        const button = getByTestId(/closedd/i)

        expect(button).toHaveAttribute('disabled');
    });

    it('the locked toggle button is disabled if the gate is open', () => {
        const {getByTestId} = render(<Controls closed={false}/>)

        const button = getByTestId(/lockedd/i)

        expect(button).toHaveAttribute('disabled');
    });

});



// cannot be closed or opened if it is locked [x]
// - provide buttons to toggle the `closed` and `locked` states.[x]
// - buttons' text changes to reflect the state the door will be in if clicked [x]
// - the closed toggle button is disabled if the gate is locked [x]
// - the locked toggle button is disabled if the gate is open [x]