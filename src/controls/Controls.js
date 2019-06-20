import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel" data-testid='controls'>
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn" data-testid='lockedd'>
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn" data-testid='closedd'>
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

// cannot be closed or opened if it is locked []
export default Controls;

