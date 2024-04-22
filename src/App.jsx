import './App.css'
import Components from './components/Header/Page.jsx'
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Sip Experience"; // Altere aqui
  }, []);
  return (
    <>
      <div className='vh-100 mh-100 bg-primary-santri overflow-x-hidden'>
        <Components />
      </div>
    </>
  )
}

export default App
