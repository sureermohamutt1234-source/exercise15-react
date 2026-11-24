import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

function LanguageComponent() {
  const language = useContext(LanguageContext);

  return (
    <div>
      {language === 'English' ? (
        <h2>Hello! Welcome</h2>
      ) : (
        <h2>¡Hola! Bienvenido</h2>
      )}
    </div>
  );
}

export default LanguageComponent;