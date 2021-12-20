import React from 'react';

export default function Navigation({currentPage, setCurrentPage}) {
  const pages = ['About Me', 'Projects', 'Contact', 'Résumé'];

  return (
    <nav>
      <ul className='flex flex-row items-end justify-items-stretch text-lg md:text-2xl xl:text-3xl lg:h-12'>
        {pages.map((page, index) => 
          (page === currentPage) ?
          <li key={index}><button onClick={()=>setCurrentPage(page)} className='text-stone-900 font-bold hover:text-stone-50 underline underline-offset-4 decoration-stone-50 decoration-4'>
            {page}
          </button></li> :
          <li key={index}><button onClick={()=>setCurrentPage(page)} className='hover:text-stone-900 font-bold text-yellow-900'>
          {page}
        </button></li>
        )}
      </ul>
    </nav>
  )
}