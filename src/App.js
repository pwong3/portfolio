import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div >

  );
}

export default App;
