import Image from 'next/image';
import Link from 'next/link';

import ExperienceContainer from '@/components/ExperienceContainer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 dark:bg-black dark:text-white">
      <section
        id="home-introduction"
        className="w-full max-w-4xl flex flex-col md:items-center md:flex-row mb-5"
      >
        <div
          id="home-introduction-text"
          className="flex flex-1 flex-col items-stretch"
        >
          <p className="md:text-xl text-lg">hi, my name is</p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mt-1 mb-4">
            justin yum.
          </h1>
          <p className="md:text-xl text-lg">nice to meet you 👋</p>
          <p className="dark:text-gray-300 my-8 font-semibold">
            💻 Software Engineer
            <br />
            📍 San Diego, CA
            <br />
            🎓 Graduated from{' '}
            <Link
              href="https://www.csusm.edu/index.html"
              className="hover:underline"
            >
              CSUSM
            </Link>{' '}
            in May 2023, B.S. in Computer Science
            <br />
            🔎 Actively searching for a full-time SWE position
          </p>
          <div
            id="home-introduction-links"
            className="flex flex-row justify-around dark:text-gray-200"
          >
            <Link
              className="underline dark:hover:text-gray-300"
              href="https://docs.google.com/document/d/1xiULdWp44aUV15px3K4RlstcA57alSGZRViMPMV-qTY/edit?usp=sharing"
            >
              resume
            </Link>
            <Link
              className="underline dark:hover:text-gray-300"
              href="https://github.com/justinyum98"
            >
              github
            </Link>
            <Link
              className="underline dark:hover:text-gray-300"
              href="https://www.linkedin.com/in/justinyum98/"
            >
              linkedin
            </Link>
          </div>
        </div>
        <div
          id="home-introduction-profile-picture"
          className="mt-10 md:mt-0 self-center md:ml-8"
        >
          <Image
            src="/profile-picture.jpeg"
            alt="profile picture"
            className="object-cover w-80 h-full rounded"
            width={300}
            height={300}
          />
        </div>
      </section>

      <section
        id="home-about-me"
        className="w-full max-w-4xl flex flex-col my-5"
      >
        <h2 className="text-3xl font-semibold self-start">about me. 🧑🏻‍💻</h2>
        <br />
        <p className="dark:text-gray-200">
          Back in 2014, I was first exposed to coding when I took AP Computer
          Science in my sophomore year at high school. Science. But, for me, my
          coding journey truly started when I self-taught myself web development
          and created my{' '}
          <Link
            href="https://justinyum.netlify.app/"
            className="font-semibold hover:underline"
          >
            first website portfolio
          </Link>
          .
          <br />
          <br />
          Since then, I interned for three reputable companies in San Diego:{' '}
          <Link
            href="https://www.playstation.com/"
            className="font-semibold hover:underline"
          >
            PlayStation
          </Link>
          ,{' '}
          <Link
            href="https://www.dexcom.com/"
            className="font-semibold hover:underline"
          >
            Dexcom
          </Link>
          , and{' '}
          <Link
            href="https://www.asml.com/"
            className="font-semibold hover:underline"
          >
            ASML
          </Link>
          . In these internships, I{' '}
          <span className="italic">
            maintained code for a RESTful API service
          </span>
          ,{' '}
          <span className="italic">
            designed & developed the frontend for an OAuth admin client
          </span>
          , and{' '}
          <span className="italic">
            automated a data pipeline to streamline analysis.
          </span>
          .
          <br />
          <br />
          In my free time, I&apos;m either playing guitar 🎸, producing beats on
          Ableton Live 🎵 or playing board games 🎲.
        </p>
      </section>

      <section
        id="home-experience"
        className="w-full max-w-4xl flex flex-col my-5"
      >
        <h2 className="text-3xl font-semibold self-start">experience. 💼</h2>
        <br />
        <ExperienceContainer />
      </section>
    </main>
  );
}
