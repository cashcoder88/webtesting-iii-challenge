// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls.js'
import { fireEvent } from '@testing-library/react/dist';

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

});



// cannot be closed or opened if it is locked [x]
// - provide buttons to toggle the `closed` and `locked` states.[x]
// - buttons' text changes to reflect the state the door will be in if clicked []
// - the closed toggle button is disabled if the gate is locked []
// - the locked toggle button is disabled if the gate is open []