import React from 'react';
import Project from './Project';

// from https://stackoverflow.com/a/2450976/8495584
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export default function ProjectList({projectData, setCurrentProject}) {
  const projects = projectData.filter(project => project.githubURL || project.deployedURL);
  shuffle(projects);
  projects.splice(6);

  return (
    <main>
      <h2>Past and Current Projects</h2>
      <div id='project-list-container' 
        className='flex flex-row flex-wrap gap-8 my-6'>
        {projects.map((project, index) => <Project data={project} setCurrentProject={setCurrentProject} key={index} />)}
      </div>
    </main>
  );
}