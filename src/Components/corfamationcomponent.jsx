import React from 'react';

function Confirmation({ vote }) {
  return (
    <div className="form-container">
      <h2>Thank You for Voting!</h2>
      <p>Your vote for {vote} has been recorded.</p>
    </div>
  );
}

export default Confirmation;
