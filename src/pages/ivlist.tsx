import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { IVs } from "~/components/ivs";

const IVList: NextPage = () => {
  return (
    <>
      <Head>
        <title>POGO IV Calculator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="flex h-screen justify-center">
        <div className="flex w-screen">
          <IVs></IVs>
        </div>
      </main>
      <footer className="bg-primary">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default IVList;
