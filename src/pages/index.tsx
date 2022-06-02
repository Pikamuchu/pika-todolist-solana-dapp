import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Pika TODO List</title>
        <meta
          name="description"
          content="Pika TODO List"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
