import React, { useState, useEffect } from 'react';
import './App.css';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalID);
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="digital-clock">
      <h1>{`${hours}:${minutes}:${seconds}`}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DigitalClock />
      </header>
    </div>
  );
}

export default App;
