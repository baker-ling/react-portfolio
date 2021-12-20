import React from 'react';

export default function Project({setCurrentProject, data: {name, blurb, description, screenshotURL, aspect, githubURL, deployedURL}}) {
  return (
    <article style={{backgroundImage: `url("${screenshotURL}")`}} 
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
                      bg-opacity-75 bg-stone-900 text-stone-50 max-w-max m-6 px-4 py-2 rounded-xl'>{name}</h3>
      <h4 className='text-lg md:text-2xl bg-opacity-75 bg-stone-900 text-yellow-300 max-w-max m-6 px-4 py-1 rounded-xl'>{blurb}</h4>
      <div className='project-links'>
        {(githubURL) ? <a href={githubURL} target='_blank' rel='noreferrer'><div><span>GitHub</span></div></a> : ''}
        {(deployedURL) ? <a href={githubURL} target='_blank' rel='noreferrer'><div><span>Online App</span></div></a> : ''}
      </div>
    </article>
  );
}