import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import GithubIcon from "remixicon-react/GithubLineIcon";
import LinkedInIcon from "remixicon-react/LinkedinBoxLineIcon";
import TwitterIcon from "remixicon-react/TwitterLineIcon";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Define animation variants
const navbarVariant = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const contentVariant = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.div className="w-full min-h-screen h-fit bg-gradient-to-b from-[#14121C] to-black" initial="initial" animate="animate">
      <Head>
        <title>Pradyumna D | About</title>
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
      <motion.div className="fixed top-0 w-full z-50" variants={navbarVariant}>
          <Navbar />
        </motion.div>
      <motion.section className="flex flex-col h-fit p-4" variants={contentVariant}>
        <div className="flex flex-col items-center gap-5">
          <div className="w-full h-full flex-1 flex pt-20 flex-col items-center justify-start">
            <h1 className="text-white font-bold text-6xl lg:text-8xl">
              about me
            </h1>
          </div>
          <Tilt className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-5 bg-transparent text-white shadow-xl rounded-lg border border-gray-700 p-4">
            <div className="rounded-lg h-32 overflow-hidden">
              <Image
                className="object-cover object-top w-full"
                src="/bg.jpeg"
                alt="Mountain"
                width={1000}
                height={1000}
              />
            </div>
            <div className="mx-auto w-32 h-32 -mt-16 rounded-full overflow-hidden">
              <Image
                className="object-cover object-center h-32"
                src="/Pradyumna1.jpeg"
                alt="Pradyumna D"
                width={128}
                height={128}
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">Pradyumna D</h2>
              <p className="text-gray-500">
                A sophomore CSE undergrad at SRMIST who does a little bit of
                everything and a lot of Web Development. Oh and I love cars and
                bikes.
              </p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
              <a
                className="rounded-full hover:bg-gray-700 duration-300 p-2"
                href="https://github.com/YARE0909"
                target="_blank"
              >
                <GithubIcon color="white" />
              </a>
              <a
                className="rounded-full hover:bg-gray-700 duration-300 p-2"
                href="https://www.linkedin.com/in/pradyumna-d-95a88123b/"
                target="_blank"
              >
                <LinkedInIcon color="white" />
              </a>
              <a
                className="rounded-full hover:bg-gray-700 duration-300 p-2"
                href="https://x.com/PradyumnaD7"
                target="_blank"
              >
                <TwitterIcon color="white" />
              </a>
            </ul>
            <div className="p-4 border-t border-t-gray-700 mt-2 w-full flex justify-center items-center">
              <a
                className="border-b-2 border-b-accent hover:text-accent hover:font-bold hover:border-b-white duration-300"
                href={"/PradyumnaResume.pdf"}
                download="PradyumnaResume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </div>
          </Tilt>
        </div>
      </motion.section>
      <section className="w-full h-fit">
        <div className="w-full h-full flex-1 flex pt-20 flex-col items-center justify-start">
          <h1 className="text-white font-bold text-6xl lg:text-8xl">
            specifics
          </h1>
          <div className="w-full flex flex-col lg:flex lg:flex-row justify-between gap-10 p-4 lg:p-20">
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full pt-5 lg:pt-0">
              <div>
                <h1 className="text-white font-bold text-4xl border-b">
                  education
                </h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div className="p-2 border-b border-b-gray-700">
                  <h1 className="text-gray-400 font-bold">2015-2020</h1>
                  <h1 className="text-white font-bold text-2xl">J.G.R.V.K</h1>
                  <h1>Bangalore, India</h1>
                  <h1 className="font-bold text-xl">High School Diploma</h1>
                </div>
                <div className="p-2 border-b border-b-gray-700">
                  <h1 className="text-gray-400 font-bold">2020-2022</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Deeksha Learning
                  </h1>
                  <h1>Bangalore, India</h1>
                  <h1 className="font-bold text-xl">PUC 1 & PUC 2</h1>
                </div>
                <div className="p-2">
                  <h1 className="text-gray-400 font-bold">2022-2026</h1>
                  <h1 className="text-white font-bold text-2xl">
                    SRM Institute of Science and Technology (SRMIST)
                  </h1>
                  <h1>Chennai, India</h1>
                  <h1 className="font-bold text-xl">
                    Bachelor of Technology in Computer Science Engineering with
                    Specialization in Data Science
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full">
              <div>
                <h1 className="text-white font-bold text-4xl border-b">
                  technical skills
                </h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div className="p-2 border-b border-b-gray-700">
                  <h1 className="text-gray-400 font-bold">Programming</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Python, C/C++, Java, Javascript, Typescript, SQL, Postgres,
                    Redis, MongoDB
                  </h1>
                </div>
                <div className="p-2 border-b border-b-gray-700">
                  <h1 className="text-gray-400 font-bold">Frameworks</h1>
                  <h1 className="text-white font-bold text-2xl">
                    React Js, Next Js, Angular, Express, FastAPI, HTML, CSS,
                    SASS, Tailwind CSS, React Native
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Tools</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Visual Studio Code, MongoDB Compass, Postman, Git, Github,
                    Visual Studio, PyCharm, IntelliJ IDEA, Android Studio
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full">
              <div>
                <h1 className="text-white font-bold text-4xl border-b">
                  experience
                </h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div className="p-2 border-b border-b-gray-700">
                  <h1 className="text-gray-400 font-bold">
                    Front End Web Developer
                  </h1>
                  <h1 className="text-white font-bold text-2xl">Intern</h1>
                  <h1 className="text-sm">
                    CleNet Tech Private Limited - Bangalore
                  </h1>
                  <h1 className="font-bold">Oct. 2023 - Present</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Building UIs for the company&rsquo;s website and services
                    provided by the company for users and company employees.
                  </h1>
                </div>
                <div className="p-2 border-b border-b-gray-700">
                  <h1 className="text-gray-400 font-bold">Technical</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Associate Lead
                  </h1>
                  <h1 className="text-sm">SRMKZILLA - Chennai</h1>
                  <h1 className="font-bold">May. 2023 - May. 2024</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Served as a Associate Technical Lead for SRMKZILLA, Mozilla
                    student community, leading workshops and events on technical
                    skills for students.
                  </h1>
                  <h1 className="font-bold text-xl mt-2">
                    Organizing seminars and events to promote learning and
                    engagement with computer science tools and related topics.
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Technical</h1>
                  <h1 className="text-white font-bold text-2xl">Member</h1>
                  <h1 className="text-sm">SRMKZILLA - Chennai</h1>
                  <h1 className="font-bold">Sep. 2022 - Apr. 2023</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Helped organizing and publicizing the events of the club in
                    the college and conducted publicity tasks.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
