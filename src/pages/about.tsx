import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen h-fit bg-gradient-to-b from-[#14121C] to-black">
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
      <section className="flex flex-col min-h-screen h-fit p-4">
        <div className="flex flex-col items-center gap-5">
          <div className="w-full h-full flex-1 flex pt-20 flex-col items-center justify-start">
            <h1 className="text-white font-bold text-6xl lg:text-8xl">
              about me
            </h1>
          </div>
          <div className="max-w-6xl w-full">
            <h1 className="text-gray-400 text-center text-xl">
              A sophomore CSE undergrad at SRMIST who does a little bit of
              everything and a lot of Web Development. Oh and I love cars and
              bikes.
            </h1>
          </div>
          <div>
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
        </div>
        <div className="w-full flex justify-center gap-10 pt-10">
          <div className="hidden lg:block">
            <Image src="/Pradyumna2.jpeg" alt="" width={400} height={500} />
          </div>
          <div>
            <Image src="/Pradyumna1.jpeg" alt="" width={400} height={500} />
          </div>
          <div className="hidden lg:block">
            <Image src="/Pradyumna3.jpeg" alt="" width={400} height={500} />
          </div>
        </div>
      </section>
      <section className="min-h-screen h-fit">
        <div className="w-full h-full flex-1 flex pt-20 flex-col items-center justify-start">
          <h1 className="text-white font-bold text-6xl lg:text-8xl">
            experience
          </h1>
          <div className="w-full flex flex-col lg:flex lg:flex-row justify-between gap-10 p-4 lg:p-20">
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full pt-5 lg:pt-0">
              <div>
                <h1 className="text-white font-bold text-4xl">education</h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div className="p-2 rounded-lg">
                  <h1 className="text-gray-400 font-bold">2015-2020</h1>
                  <h1 className="text-white font-bold text-2xl">J.G.R.V.K</h1>
                  <h1>Bangalore, India</h1>
                  <h1 className="font-bold text-xl">High School Diploma</h1>
                </div>
                <div className="p-2 rounded-lg">
                  <h1 className="text-gray-400 font-bold">2020-2022</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Deeksha Learning
                  </h1>
                  <h1>Bangalore, India</h1>
                  <h1 className="font-bold text-xl">PUC 1 & PUC 2</h1>
                </div>
                <div className="p-2 rounded-lg">
                  <h1 className="text-gray-400 font-bold">2022-2026</h1>
                  <h1 className="text-white font-bold text-2xl">
                    SRM Institute of Science and Technology (SRMIST)
                  </h1>
                  <h1>Chennai, India</h1>
                  <h1 className="font-bold text-xl">
                    Bachelor of Technology in Computer Science with
                    specialisation in Big Data Analysis
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full">
              <div>
                <h1 className="text-white font-bold text-4xl">
                  technical skills
                </h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div>
                  <h1 className="text-gray-400 font-bold">Programming</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Python,C/C++, Java, Javascript, Typescript, SQL, Postgres,
                    Redis, MongoDB
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Frameworks</h1>
                  <h1 className="text-white font-bold text-2xl">
                    React Js, Next Js, Angular, Express, FastAPI, HTML, CSS,
                    SASS, Tailwind CSS
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Tools</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Visual Studio Code, MongoDB Compass, Postman, Git, Github
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-center max-w-screen-sm w-full">
              <div>
                <h1 className="text-white font-bold text-4xl">experience</h1>
              </div>
              <div className="flex flex-col gap-5 pt-10">
                <div>
                  <h1 className="text-gray-400 font-bold">
                    Front End Web Developer
                  </h1>
                  <h1 className="text-white font-bold text-2xl">Intern</h1>
                  <h1 className="text-sm">Dudes - Bangalore</h1>
                  <h1 className="font-bold">Oct. 2023 - Present</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Building UIs for the company&rsquo;s website and services
                    provided by the company for users and company employees.
                  </h1>
                </div>
                <div>
                  <h1 className="text-gray-400 font-bold">Technical</h1>
                  <h1 className="text-white font-bold text-2xl">
                    Associate Lead
                  </h1>
                  <h1 className="text-sm">SRMKZILLA - Chennai</h1>
                  <h1 className="font-bold">May. 2023 - Present</h1>
                  <h1 className="font-bold text-xl mt-2">
                    Currently serving as a Associate Technical Lead for
                    SRMKZILLA, Mozilla student community, leading workshops and
                    events on technical skills for students.
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
    </div>
  );
};

export default About;
