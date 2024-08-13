import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

const TEXTS = [
  "Student",
  "Full Stack Developer",
  "UI/UX Developer",
  "Programmer",
  "Web Developer",
  "App Developer",
  "Automobile Enthusiast",
];

// Define animation variants
const navbarVariant = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const contentVariant = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

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
    <motion.div initial="initial" animate="animate">
      <Head>
        <title>Pradyumna D</title>
        <meta
          name="description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        <link rel="icon" href="/ogIcon.ico" />
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
        <motion.div className="fixed top-0 w-full z-50" variants={navbarVariant}>
          <Navbar />
        </motion.div>
        <motion.div
          style={{
            backgroundImage: "url('./portFolioBg.webp')",
          }}
          className="flex-1 p-6 flex items-center justify-start lg:pl-64 bg-cover bg-no-repeat"
          variants={contentVariant}
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
        </motion.div>
      </div>
    </motion.div>
  );
}
