import React from 'react';

export default function Footer(props) {
  return (
    <footer className='container mx-auto my-8'>
      <ul className='flex justify-evenly px-4 text-yellow-300 font-semibold text-lg'>
        <li><a href="https://github.com/baker-ling" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/baker-ling" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://dev.to/bakerling" target="_blank" rel="noreferrer">Dev.to</a></li>
      </ul>
      <h2 className='text-stone-400'>Copyright Brian D. Baker 2021</h2>
    </footer>
  );
}