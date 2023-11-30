import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const themes = [
  { background: 'lightblue', text: 'black' },
  { background: 'darkblue', text: 'white' },
  { background: 'red', text: 'white' },
  // Add more themes as needed
];

const App = () => {
  return (
      <ThemeSwitcher themes={themes} />
  );
};

export default App;