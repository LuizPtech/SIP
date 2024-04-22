import './App.css'
import Components from './components/Header/Page.jsx'
import logo from "../../assets/Santri Tecnologia.png"
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Sip Experience"; // Altere aqui
  }, []);
  return (
    <>
      <div className='vh-100 mh-100 bg-primary-santri overflow-x-hidden'>
      <img src={logo}/>
        <Components />
      </div>
    </>
  )
}

export default App
