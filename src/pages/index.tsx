import React, { FC, ReactElement } from 'react';
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '@/components/Title';
import {
  faDiscord,
  faReddit,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../images/NanoGift.svg'

type fancyLinkProps = {
  link: string,
  iconvalue: JSX.Element,
  text1: string,
  text2: string,
  bg_color: string,
}


const FancyLink: FC<fancyLinkProps> = ({ link, iconvalue, text1, text2, bg_color }): ReactElement => {
  return (<a href={link}
    className={`w-full sm:w-1/2 lg:w-1/4 px-2 flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ${bg_color} dark:hover:bg-gray-600 dark:focus:ring-gray-700 shadow-lg`}>
    {iconvalue}
    <div className="text-left pl-3">
      <div className="mb-1 text-xs">{text1}</div>
      <div className="-mt-1 font-sans text-sm font-semibold">{text2}</div>
    </div>
  </a>)
};

export default function Home() {
  return (
    <main className="pt-10 max-w-4xl mx-auto">
      <Helmet htmlAttributes={{ lang: 'en', }}>
        <meta charSet="utf-8" />
        <meta name="description" content="We are aiming to raise awareness around Nano (XNO)!" />
        <title>Nano Giveaway</title>
        <link rel="canonical" href="https://www.nanogiveaway.com/" />
      </Helmet>
      <div className="containerbackground dark:bg-gray-800/[.20] dark:border-gray-700 rounded-lg text-slate-400 px-2 italic text-4xl md:text-6xl text-center">
        Coming Soon!
      </div>
      <div
        className="p-10 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800/[.50] dark:border-gray-700">
        <Title> <img style={{ height: '1.5em', display: 'inline' }} src={logo} alt="Logo" /> Nano Giveaway!</Title>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">A community for Nano Enthusiasts.</p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <FancyLink link="https://twitch.tv/nanogiveaway" iconvalue={<FontAwesomeIcon icon={faTwitch} size="lg" />} text1="Watch our streams on" text2="Twitch" bg_color='dark:bg-gray-700' />
          <FancyLink link="https://twitter.com/NanoGiveaway" iconvalue={<FontAwesomeIcon icon={faTwitter} size="lg" />} text1="Follow us on" text2="Twitter" bg_color='dark:bg-gray-700' />
          <FancyLink link="https://reddit.com/r/NanoGiveaway" iconvalue={<FontAwesomeIcon icon={faReddit} size="lg" />} text1="(Coming soon)" text2="Reddit" bg_color='dark:bg-gray-700' />
          <FancyLink link="https://discord.gg/xno" iconvalue={<FontAwesomeIcon icon={faDiscord} size="lg" />} text1="Join our community on" text2="Discord" bg_color='dark:bg-blue-700' />
        </div>
      </div>
    </main>
  );
}
