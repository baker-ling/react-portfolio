import React from 'react';

export default function Resume(props) {

  return (
    <main >
      <h2>Résumé</h2>
      <div>
        <h3>Download</h3>
        <ul className='list-disc list-outside ml-6'>
          <li>My résumé is available for download <a href="/pdf/Baker_CV.pdf" className='text-yellow-300'>here</a>.</li>
        </ul>
        <h3>Frontend Proficiencies</h3>
        <ul className='list-disc list-outside ml-6'>
          <li>HTML and semantic structure</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>REST & GraphQL API consumption</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>Tailwind</li>
        </ul>
        
        <h3>Backend Proficiencies</h3>
        <ul className='list-disc list-outside ml-6'>
          <li>JavaScript / Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>REST API implementation</li>
          <li>GraphQL API implementation</li>
          <li>Python</li>
        </ul>
      </div>

    </main>
  );
}