import React from 'react';

const styles = {
    border: '1px solid rgba(0, 0, 0, 0.5)',
    height: '100px',
    width: '100px',
};

export const Box = ({ player }) => { // player = 'X' or 'O' or nothing.
  return <div style={styles}>{player}</div>
};

