import Link from "next/link";
import React, { useState } from "react";
import CloseIcon from "remixicon-react/CloseLineIcon"
import MenuIcon from "remixicon-react/MenuLineIcon"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full h-20 p-6 flex justify-between bg-primary">
      <div>
        <h1 className="font-bold text-4xl">
          <span className="text-3xl text-accent font-medium">&lt;</span>
          Pradyumna <span className="text-3xl text-accent font-medium">/&gt;</span>
        </h1>
      </div>
      <div className="lg:flex gap-5 hidden">
        <div>
          <Link
            href="/"
            className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer"
          >
            <span className="text-xl text-accent font-medium">&lt;</span>
            Home <span className="text-lg text-accent font-medium">/&gt;</span>
          </Link>
        </div>{" "}
        <div>
          <Link
            href="/about"
            className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer"
          >
            <span className="text-xl text-accent font-medium">&lt;</span>
            About <span className="text-lg text-accent font-medium">/&gt;</span>
          </Link>
        </div>{" "}
        <div>
          <Link
            href="/projects"
            className="font-bold text-xl text-gray-400 hover:text-white duration-300 cursor-pointer"
          >
            <span className="text-xl text-accent font-medium">&lt;</span>
            Projects{" "}
            <span className="text-lg text-accent font-medium">/&gt;</span>
          </Link>
        </div>
      </div>
      <div
          className="lg:hidden z-[1000]"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? <CloseIcon color="black" /> : <MenuIcon />}
        </div>
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 bg-white transition-transform duration-300 transform ${menu ? "translate-y-0" : "-translate-y-full"
          } overflow-hidden z-50`}
      >
        <div className="w-full h-full px-[45px] flex flex-col justify-between py-[60px] text-black">
          <div className="w-fit h-fit flex flex-col gap-2">
          <div>
          <Link
            href="/"
            className="font-bold text-4xl text-black hover:text-white duration-300 cursor-pointer"
          >
            <span className="text-4xl text-accent font-medium">&lt;</span>
            Home <span className="text-4xl text-accent font-medium">/&gt;</span>
          </Link>
        </div>{" "}
        <div>
          <Link
            href="/about"
            className="font-bold text-4xl text-black hover:text-white duration-300 cursor-pointer"
          >
            <span className="text-4xl text-accent font-medium">&lt;</span>
            About <span className="text-4xl text-accent font-medium">/&gt;</span>
          </Link>
        </div>{" "}
        <div>
          <Link
            href="/projects"
            className="font-bold text-4xl text-black hover:text-white duration-300 cursor-pointer"
          >
            <span className="text-4xl text-accent font-medium">&lt;</span>
            Projects{" "}
            <span className="text-4xl text-accent font-medium">/&gt;</span>
          </Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
