import React, { useState } from 'react';

import './App.css';

import CountdownTimer from './CountdownTimer';

function App() {
  const [year] = useState(new Date().getFullYear());
  return (
    <div>
      <h1>HacktoberFest {year} Countdown</h1>
      <CountdownTimer startDate={new Date(`${year}-10-1`)} />
    </div>
  );
}

export default App;
