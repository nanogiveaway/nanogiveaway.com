import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '@/components/Title';
import {
  faDiscord,
  faReddit,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../images/NanoGift.svg'

export default function Home() {
  return (
    <main className="pt-10 max-w-4xl mx-auto">
      <div
        className="p-10 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Title> <img style={{ height: '1.5em', display: 'inline' }} src={logo} alt="Logo" /> Nano Giveaway!</Title>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">A community for Nano Enthusiasts.</p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="https://twitch.tv/nanogiveaway"
            className="w-full sm:w-1/2 lg:w-1/4 px-2 flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <FontAwesomeIcon icon={faTwitch} />
            <div className="text-left pl-3">
              <div className="mb-1 text-xs">Watch our streams on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">Twitch</div>
            </div>
          </a>
          <a href="https://twitter.com/NanoGiveaway"
            className="w-full sm:w-1/2 lg:w-1/4 px-2 flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <FontAwesomeIcon icon={faTwitter} />
            <div className="text-left pl-3">
              <div className="mb-1 text-xs">Follow us on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">Twitter</div>
            </div>
          </a>
          <a href="https://reddit.com/r/NanoGiveaway"
            className="w-full sm:w-1/2 lg:w-1/4 px-2 flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <FontAwesomeIcon icon={faReddit} />
            <div className="text-left pl-3">
              <div className="mb-1 text-xs">(Coming soon)</div>
              <div className="-mt-1 font-sans text-sm font-semibold">Reddit</div>
            </div>
          </a>
          <a href="https://discord.gg/xno"
            className="w-full sm:w-1/2 lg:w-1/4 px-2 flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <FontAwesomeIcon icon={faDiscord} />
            <div className="text-left pl-3">
              <div className="mb-1 text-xs">Join our community on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">Discord</div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
