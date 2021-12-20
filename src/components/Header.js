import React from 'react';
import Navigation from './Navigation'

function Header({currentPage, setCurrentPage}) {

  return (
    <header style={{backgroundImage: "url('/img/pxfuel.com.jpg')" }} className="min-h-fit h-40 bg-yellow-400 mb-6">
      <div className='container flex flex-col justify-center items-start lg:flex-row lg:items-center lg:justify-between h-full px-4'>
        <h1 className='text-5xl md:text-6xl text-black font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-900 to-stone-900 lg:h-16'>Brian D. Baker</h1>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </header>
  );
}

export default Header;