import React, { useEffect } from 'react';

const SingleProject = ({ currentProject, setCurrentProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { name, description, screenshotURL, githubURL, deployedURL } = currentProject;
  return (
    <main>
      <h2>{name}</h2>

      {
        (githubURL)
          ? <h3 className='text-yellow-100'>
              <a href={githubURL} target='_blank' rel='noreferrer'>GitHub Repository</a>
            </h3>
          : ''
      }
      {

        (deployedURL)
          ? <h3 className='text-yellow-100'>
              <a href={deployedURL} target='_blank' rel='noreferrer'>Live App</a>
            </h3>
          : ''
      }

      <div dangerouslySetInnerHTML={{ __html: description }} />


      <img
        className='my-8 border-2 border-yellow-700'
        src={process.env.PUBLIC_URL + '/' + screenshotURL} alt={name + ' screenshot'}
      />

      <button
        className='my-8 py-2 px-4 bg-stone-500 rounded-xl'
        onClick={() => setCurrentProject(null)}
      >Go Back</button>
    </main>
  );
}

export default SingleProject;