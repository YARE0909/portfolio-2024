import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen h-fit bg-gradient-to-b from-[#14121C] to-black">
      <div className="fixed top-0 w-full z-[999]">
        <Navbar />
      </div>
      <div className="flex flex-col gap-20 items-center pt-20 p-4">
        <div>
          <h1 className="text-8xl text-white font-bold">my projects</h1>
        </div>
        <div className="w-full flex flex-col lg:flex lg:flex-row lg:flex-wrap justify-center gap-20">
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://hackout.shawshankkumar.me/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project4.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Travelmate</h1>
              </div>
              <div>
                <h1 className="text-center">
                  Interact and plan trips from seasoned travellers. <br />
                  (Hackout 2023 travel track winner)
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://kzilla-internal-hackathon.vercel.app/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project3.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Y</h1>
              </div>
              <div>
                <h1 className="text-center">
                  A clone of the popular social media app,
                  <br /> X(Twitter)
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://infostash-web.vercel.app/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project1.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Infostash</h1>
              </div>
              <div>
                <h1 className="text-center">
                  UI for a platform that offers certified courses on various
                  topics.
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://capx-facial-recognition.vercel.app/");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project2.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">Facial Recognition App</h1>
              </div>
              <div>
                <h1 className="text-center">
                  A webapp that verifies users on signing up to prevent duplicate accounts.
                </h1>
              </div>
            </div>
          </Tilt>
          <Tilt className="cursor-pointer">
            <div
              className="bg-purple-950 rounded-2xl p-4 flex flex-col gap-5 items-center"
              onClick={() => {
                router.push("https://arthouse814.org");
              }}
            >
              <div>
                <Image
                  className="rounded-lg"
                  src="/project5.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="font-bold text-4xl">ArtHouse 814 Website</h1>
              </div>
              <div>
                <h1 className="text-center">
                  Website for ArtHouse 814
                </h1>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Projects;
