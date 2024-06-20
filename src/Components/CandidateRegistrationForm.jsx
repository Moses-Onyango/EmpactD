import React, { useState } from 'react';
import './App.css';

function CandidateRegistrationForm({ onRegister }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [party, setParty] = useState('');
  const [position, setPosition] = useState('');
  const [website, setWebsite] = useState('');
  const [biography, setBiography] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      age,
      address,
      city,
      party,
      position,
      website,
      biography,
    };

    onRegister(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Candidate Registration Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="party">Political Party:</label>
        <input
          type="text"
          id="party"
          value={party}
          onChange={(e) => setParty(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position Running For:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="website">Campaign Website:</label>
        <input
          type="url"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="biography">Biography:</label>
        <textarea
          id="biography"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          required
        ></textarea>
      </div>
      <button className="submit-button" type="submit">Register</button>
    </form>
  );
}

export default CandidateRegistrationForm;

