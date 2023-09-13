import path from 'path';
import { promises as fs } from 'fs';

import Experience, { type ExperienceProps } from '@/components/Experience';

type ExperienceContainerProps = {};

export default async function ExperienceContainer({}: ExperienceContainerProps) {
  const filePath = path.join(process.cwd(), 'data/experience.json');
  const jsonData = await fs.readFile(filePath);
  const experience = JSON.parse(jsonData.toString()) as ExperienceProps[];

  return (
    <>
      {experience.map((props, index) => (
        <Experience key={index} {...props} />
      ))}
    </>
  );
}
