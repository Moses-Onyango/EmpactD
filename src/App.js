import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './App.css';
import RegistrationForm from './Components/Registration';
import CandidateRegistrationForm from './Components/Registration';
import Confirmation from './Components/corfamationcomponent';
import VotingForm from './Components/votingComponent';
import CandidatesComp from './Components/Candidates';

function App() {
  

  return (
    <>
    <div className="App">
        {/* <CandidatesComp/>
      <RegistrationForm/>  */}
      <CandidateRegistrationForm/>
      {/* <Confirmation/> */}
      {/* <VotingForm/> */}

    
      </div>
  </>
  );
}

export default App;

