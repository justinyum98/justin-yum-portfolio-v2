import Link from 'next/link';

export type ExperienceProps = {
  title: string;
  company: string;
  companyURL: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string | React.ReactNode;
  skills: string[];
};

export default function Experience(props: ExperienceProps) {
  return (
    <Link
      href={props.companyURL}
      className="w-full flex flex-col md:flex-row my-2 transition ease-in hover:cursor-pointer hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700 p-5 rounded"
    >
      <div className="md:w-1/4">
        <p className="uppercase dark:text-gray-200 font-medium">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <div className="md:w-3/4 flex flex-col">
        <h4 className="font-semibold">
          {props.title} • {props.company}
        </h4>
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
