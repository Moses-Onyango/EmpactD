import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
// import '../App.css';

const CandidatesComp = ()=>{
  const [options, setOptions] = useState([
    { 
      id: 1, 
      name: 'Candidate sam', 
      party: 'Party A', 
      votes: 0, 
      image: 'https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699502_640.jpg' 
    },
    { 
      id: 2, 
      name: 'Candidate swale', 
      party: 'Party B', 
      votes: 0, 
      image: 'https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_1280.jpg' 
    },
    { 
      id: 3, 
      name: 'Candidate iyan', 
      party: 'Party C', 
      votes: 0, 
      image: 'https://cdn.pixabay.com/photo/2015/02/17/08/46/face-639139_640.jpg' 
    },
  ]);

  const handleVote = (id) => {
    setOptions(options.map(option =>
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    ));
  };
    return (<>
      <h1>Voting System</h1>
      <div className="options">
        {options.map(option => (
          <div key={option.id} className="option-card">
            <div className="option-image">
              <img src={option.image} alt={option.name} style={{maxHeight:"25vh",minHeight:"25vh", objectFit:'cover'}}/>
            </div>
            <div className="option-details">
              <h2>{option.name}</h2>
              <p>Party: {option.party}</p>
              <button onClick={() => handleVote(option.id)}>Vote</button>
              <p>Votes: {option.votes}</p>
            </div>
          </div>
        ))} 
        
        </div>
    </>);
}

export default CandidatesComp;