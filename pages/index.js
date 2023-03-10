import Head from "next/head";
import Company from "./company";
import Services from "./services";
import Banner from '@/components/Banner';
import Work from '@/components/Work';
import Clients from "@/components/Clients";
import NewsLetter from "@/components/NewsLetter";


export default function Home() {
  return (
    <>
      <Head>
        <title>GD Dots</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/5.png" />
      </Head>
      <Banner />
      <Company />
      <Services />
      <Work/>
      <Clients/>
      <NewsLetter/>
    </>
  );
}
