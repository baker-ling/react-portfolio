import React from 'react';

export default function Project({setCurrentProject, data}) {
  const {name, blurb, shortDescription, screenshotURL, aspect, githubURL, deployedURL} = data;
  return (
    <article style={{backgroundImage: `url("${process.env.PUBLIC_URL + '/' + screenshotURL}")`}} 
      className={`aspect-square
        bg-stone-900
        hover:bg-opacity-75 hover:bg-blend-soft-light
        basis-full max-w-sm
        md:max-w-lg 
        lg:max-w-md lg:basis-1/2
        xl:max-w-xl
        bg-no-repeat ${(aspect === 'horizontal') ? 'bg-cover' :'bg-contain'}
        border-yellow-400 border-2`}>
      <h3 className='text-xl md:text-4xl 
                      bg-opacity-75 bg-stone-900 text-stone-50 max-w-max mx-6 my-3 md:my-6 px-4 py-2 rounded-xl'
          
      >
        <button className='font-semibold' href="#" onClick={() => setCurrentProject(data) }>
          {name}
        </button>
      </h3>
      <h4 className='text-lg md:text-2xl bg-opacity-75 bg-stone-900 text-yellow-300 max-w-max my-3 md:my-6 mx-6 px-4 py-1 rounded-xl'>{blurb}</h4>
      <div className='short-description'>{shortDescription}</div>
      <div className='project-links'>
        {(githubURL) ? <a href={githubURL} target='_blank' rel='noreferrer'><div><span>GitHub</span></div></a> : ''}
        {(deployedURL) ? <a href={deployedURL} target='_blank' rel='noreferrer'><div><span>Online App</span></div></a> : ''}
      </div>
    </article>
  );
}