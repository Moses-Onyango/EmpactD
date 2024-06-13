import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

const AdminVotingSystem = () => {
  const [candidates, setCandidates] = useState([]);
  const [newCandidateName, setNewCandidateName] = useState('Santa Gadafi');
  const [newCandidateImage, setNewCandidateImage] = useState('');
  const [newCandidatePartyLogo, setNewCandidatePartyLogo] = useState('');

  const handleAddCandidate = () => {
    if (newCandidateName.trim() !== '') {
      const newCandidate = {
        name: newCandidateName.trim(),
        image: newCandidateImage,
        partyLogo: newCandidatePartyLogo
      };
      setCandidates([...candidates, newCandidate]);
      setNewCandidateName('');
      setNewCandidateImage('');
      setNewCandidatePartyLogo('');
    }
  };

  const handleDeleteCandidate = (index) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    setCandidates(updatedCandidates);
  };

  return (
    <div>
      <h1>Admin Panel - Voting System</h1>
      <h2>Candidates</h2>
      {candidates.map((candidate, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <img src={candidate.image} alt={candidate.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <img src={candidate.partyLogo} alt={`${candidate.name} Party Logo`} style={{ maxWidth: '50px', maxHeight: '50px' }} />
          <span>{candidate.name}</span>
          <button onClick={() => handleDeleteCandidate(index)}>Delete</button>
        </div>
      ))}
      <div>
        <input
          type="text"
          placeholder="Enter candidate name"
          value={newCandidateName}
          onChange={(e) => setNewCandidateName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter image URL"
          value={newCandidateImage}
          onChange={(e) => setNewCandidateImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter party logo URL"
          value={newCandidatePartyLogo}
          onChange={(e) => setNewCandidatePartyLogo(e.target.value)}
        />
        <button onClick={handleAddCandidate}>Add Candidate</button>
      </div>
      <button>Start Voting</button>
    </div>
  );
};

export default AdminVotingSystem;

