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
      <main className="min-h-full w-full">
        <Header />
        <Socials className="flex flex-col px-4 gap-y-4 mb-7" />
        <Discord className="h-96 w-full px-4" />
      </main>
    </>
  );
};

export default Home;
