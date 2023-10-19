import React from 'react'
import Header from './components/pages/Header.jsx';
import Main from './components/pages/Main.jsx';
import Success from './components/pages/Success.jsx';
import { useState } from 'react';

const App = () => {
  const [success, setSuccess] = useState(null);
   return (
    <div className="App bg lg:flex lg:flex-row-reverse lg:items-center lg:max-w-[58rem] lg:m-auto">
      {!success && (
        <>
        <Header />
        <Main setShowSuccess={setSuccess} />
        </>
      )}
      {success && <Success setShowSuccess={setSuccess} />}
    </div>
  ) 
}

export default App;