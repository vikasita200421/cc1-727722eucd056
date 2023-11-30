import React, { useState } from 'react';

const ThemeSwitcher = ({ themes }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const switchTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <div style={{ height: '100vh', backgroundColor: currentTheme.background, color: currentTheme.text, textAlign: 'center', padding: '20px' }}>
      <h1>THEME SWITCH</h1>
      <button
        style={{
          margin: '0px autp',
          padding: '10px 20px',
          borderRadius: '8px', // Adjust the value for the desired roundness
          cursor: 'pointer', // Add this to indicate the button is clickable
          backgroundColor: 'blue', // Add a background color for the button
          color: 'white', // Add a text color for the button
        }}
        onClick={switchTheme}
      >
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;