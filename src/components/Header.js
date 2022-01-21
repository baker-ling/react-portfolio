import React from 'react';
import Navigation from './Navigation'
import bgImage from '../img/pxfuel.com.jpg'

function Header({currentPage, setCurrentPage, setCurrentProject}) {

  return (
    <header style={{backgroundImage: `url(${bgImage})` }} className="min-h-fit h-40 bg-yellow-400 mb-6">
      <div className='container flex flex-col justify-center items-start lg:flex-row lg:items-center lg:justify-between h-full px-4'>
        <h1 className='text-5xl md:text-6xl text-black font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-900 to-stone-900 lg:h-16'>Brian D. Baker</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentProject={setCurrentProject}/>
      </div>
    </header>
  );
}

export default Header;