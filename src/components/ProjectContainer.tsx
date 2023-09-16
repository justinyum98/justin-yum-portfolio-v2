import path from 'path';
import { promises as fs } from 'fs';

import Project, { type ProjectProps } from '@/components/Project';

type ProjectsContainerProps = {};

export default async function ProjectsContainer({}: ProjectsContainerProps) {
  const filePath = path.join(process.cwd(), 'data/projects.json');
  const jsonData = await fs.readFile(filePath);
  const projects = JSON.parse(jsonData.toString()) as ProjectProps[];

  return (
    <>
      {projects.map((props, index) => (
        <Project key={index} {...props} />
      ))}
    </>
  );
}
