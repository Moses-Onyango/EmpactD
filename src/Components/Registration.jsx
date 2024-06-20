import React, { useState } from 'react';
// import '../App.css';


function VoterRegistrationForm({ onRegister }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [voterId, setVoterId] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      age,
      address,
      city,
      voterId,
      gender,
      nationality,
    };

    onRegister(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Voter Registration Form</h2>
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
          type="+19"
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
        <label htmlFor="voterId">Voter ID:</label>
        <input
          type="(return{true})"
          id="voterId"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="nationality">Nationality:</label>
        <input
          type="Uganda"
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />
      </div>
      <button className="submit-button" type="submit">Register</button>
    </form>
  );
}

export default VoterRegistrationForm;
