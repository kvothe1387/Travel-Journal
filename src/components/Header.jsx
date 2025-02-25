import globeImg from '../assets/globe.png';
import React from 'react';


export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={globeImg} alt="Globe icon" className="header-icon" />
        <h1>My Travel Journal</h1>
      </div>
    </header>
  );
}