import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16 lg:p-24 dark:bg-black dark:text-white">
      <section
        id="home-introduction"
        className="w-full max-w-4xl flex flex-col items-center md:flex-row"
      >
        <div id="home-introduction-text" className="flex-1 md:mr-8">
          <p className="md:text-xl text-lg">hi, my name is</p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mt-1 mb-4">
            justin yum.
          </h1>
          <p className="md:text-xl text-lg">nice to meet you 👋</p>
          <p className="dark:text-gray-300 my-8">
            I&apos;m a full-stack web developer based in San Diego, CA.
            <br />
            Recently graduated in May 2023 with a B.S. in Computer Science.
            <br />
            Actively searching for a full-time SWE position.
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
          className="mt-10 md:mt-0 shrink-0"
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
    </main>
  );
}
