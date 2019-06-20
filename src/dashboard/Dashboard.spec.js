// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard'
import Controls from '../controls/Controls';
import Display from '../display/Display';
import '@testing-library/react/cleanup-after-each';

describe('Dashboard', () => {
    

    it('runs tests sanity check', () => {
        expect(true).toBe(true);
      });


      // This was the one we discussed yesterday in review, solved with Test Id!
    it('shows the controls and display', () => {
      const {getByTestId} = render(<Dashboard/>)

      const controls = getByTestId(/controls/i)
      const display = getByTestId(/display/i)
      expect(display).toBeTruthy();
      expect(controls).toBeTruthy();
    });
});

// - shows the controls and display [x]