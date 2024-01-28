import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeChanger = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    document.body.classList.toggle('dark-theme', newTheme);
  };
  
  return (
    <button onClick={toggleTheme}>
      <FontAwesomeIcon icon={faSun} />
    </button>
  );
};

export default ThemeChanger;
