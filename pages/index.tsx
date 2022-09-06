import { NextPage } from "next";
import Head from "next/head";
import Discord from "../components/Discord";
import Header from "../components/Header";
import Socials from "../components/Socials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nano Giveaway</title>
      </Head>
      <div className="min-h-full">
        <Header className="flex items-center justify-center" />
        <main className="mx-auto w-full max-w-md lg:flex lg:max-w-none lg:flex-col lg:items-center">
          <Socials className="mb-7 flex flex-col gap-y-4 px-4 md:gap-y-6 lg:flex-row lg:gap-x-4" />
          <Discord className="h-96 w-full px-4 pb-4 drop-shadow-md lg:max-w-2xl" />
        </main>
      </div>
    </>
  );
};

export default Home;
