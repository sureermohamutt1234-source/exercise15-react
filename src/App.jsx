import React, { useState } from 'react';
import LanguageContext from './LanguageContext';
import LanguageComponent from './LanguageComponent';

function App() {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === 'English' ? 'Spanish' : 'English'
    );
  };

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <h1>Language Context Example</h1>

        <button onClick={toggleLanguage}>
          Switch to {language === 'English' ? 'Spanish' : 'English'}
        </button>

        <LanguageComponent />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;