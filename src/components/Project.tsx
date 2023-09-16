import Link from 'next/link';
import Image from 'next/image';

export type ProjectProps = {
  name: string;
  projectURL: string;
  githubURL: string;
  imageSrc: string;
  description: string | React.ReactNode;
  skills: string[];
};

export default function Project(props: ProjectProps) {
  return (
    <Link
      href={props.projectURL}
      className="w-full flex flex-col md:flex-row my-2 transition ease-in hover:cursor-pointer hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 p-5 rounded"
    >
      <div className="md:w-1/3 md:mr-6">
        <Image
          src={props.imageSrc}
          alt="project thumbnail"
          className="object-cover h-full w-full rounded"
          width={500}
          height={500}
        />
      </div>
      <div className="md:w-2/3 flex flex-col mt-2 md:mt-0">
        <h4 className="font-semibold">{props.name}</h4>
        <p className="dark:text-gray-200 mt-1">{props.description}</p>
        <div className="flex flex-row flex-wrap mt-2">
          {props.skills.map((skill, index) => (
            <p
              key={index}
              className="rounded-full text-sm mt-2 font-medium bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-700 px-3 py-1 mr-2"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
