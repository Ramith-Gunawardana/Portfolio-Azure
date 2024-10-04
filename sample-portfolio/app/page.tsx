import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsGlobe2 } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-10 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 bg-gray-900 p-5 max-w-96 row-start-2 rounded-lg items-center sm:items-start">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold mt-4">Ramith Gunawardana</h1>
        <p className="text-gray-400 mt-2 text-left">
          I'm a Software Engineering Undergraduate at KDU experienced in Mobile App Development and passionate in Web Development, Cloud Computing and Machine Learning.
        </p>
        {/* Social Links */}
        <div className="flex mt-4 space-x-4">
          <a href="https://ramith-gunawardana.github.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-800 hover:text-cyan-500">
            <BsGlobe2 size={30} />
          </a>
          <a href="https://github.com/Ramith-Gunawardana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100">
            <FaGithub size={30} />
          </a>
          <a href="https://lk.linkedin.com/in/ramith-gunawardana" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500">
            <FaLinkedin size={32} />
          </a>
          
        </div>
      </main>
    </div>
  );
}
