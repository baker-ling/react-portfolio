import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {
    
      case 'Contact':
        return <Contact currentPage={currentPage}/>;
      
      case 'Projects':
        return <Projects currentPage={currentPage}/>;

      case 'Résumé':
        return <Resume currentPage={currentPage}/>;
    
      default:
      case 'About Me':
        return <About currentPage={currentPage}/>;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
