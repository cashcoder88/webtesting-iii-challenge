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
});


// cannot be closed or opened if it is locked [x]