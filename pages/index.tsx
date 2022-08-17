import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nano Giveaway | Home</title>
      </Head>
      <main className="bg-dark text-white min-h-full w-full flex flex-col justify-center">
        <section className="">
          <h1 className="text-8xl font-headings text-center">Hello!</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
