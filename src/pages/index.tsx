import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Student",
  "Full Stack Developer",
  "UI/UX Developer",
  "Programmer",
  "Web Developer",
  "App Developer",
  "Automobile Enthusiast",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <Head>
        <title>Pradyumna D</title>
        <meta
          name="description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Pradyumna D" />
        <meta
          property="og:description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        <meta property="og:url" content="https://pradyumnad.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <div id="home" className="w-full min-h-screen h-fit flex flex-col">
        <div className="fixed top-0 w-full">
          <Navbar />
        </div>
        <div
          style={{
            backgroundImage: "url('./portFolioBg.webp')",
          }}
          className="flex-1 p-6 flex items-center justify-start lg:pl-64 bg-cover bg-no-repeat"
        >
          <div>
            <div>
              <h1 className="text-cyan-400 font-bold text-2xl">Hello There,</h1>
            </div>
            <div>
              <h1 className="font-bold text-6xl lg:text-7xl">
                I am <span className="text-accent">Pradyumna D</span>
              </h1>
            </div>
            <div className="flex flex-col lg:flex lg:flex-row lg:gap-2 items-start">
              <h1 className="text-3xl font-bold text-gray-500">I am a</h1>
              <TextTransition springConfig={presets.wobbly}>
                <h1 className="text-6xl font-bold">
                  {TEXTS[index % TEXTS.length]}
                </h1>
              </TextTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
