import React, { useState } from 'react';


function VotingForm({ candidates, onVote }) {
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onVote(selectedCandidate);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Cast Your Vote</h2>
      <div className="form-group">
        <label htmlFor="candidate">Select Candidate:</label>
        <select
          id="candidate"
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(e.target.value)}
          required
        >
          <option value="">Select</option>
          {candidates.map((candidate, index) => (
            <option key={index} value={candidate.name}>{candidate.name} ({candidate.position})</option>
          ))}
        </select>
      </div>
      <button className="submit-button" type="submit">Vote</button>
    </form>
  );
}

export default VotingForm;
