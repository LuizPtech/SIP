import './App.css'
import Components from './components/Header/Page.jsx'
import React, { useEffect } from 'react';
import logo from './assets/Santri Tecnologia.png';

function App() {
  useEffect(() => {
    document.title = "Sip Experience"; // Altere aqui
  }, []);
  return (
    <>
      <div className='vh-100 mh-100 bg-primary-santri overflow-x-hidden'>
      <img src={logo} alt="Logo da Santri Tecnologia" />
        <Components />
      </div>
    </>
  )
}

export default App
