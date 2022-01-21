import React from 'react';
import ProjectList from '../components/ProjectList';
import SingleProject from '../pages/SingleProject'

const projectData = require('./projectData.json');


export default function Projects({currentProject, setCurrentProject}) {
  return (
    (currentProject) ? 
      <SingleProject currentProject={currentProject} setCurrentProject={setCurrentProject} />
    :
      <ProjectList projectData={projectData} setCurrentProject={setCurrentProject} />
  );
}