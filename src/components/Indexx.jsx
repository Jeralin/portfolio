import React, { useState } from "react";
import { Link } from "react-scroll";

import logo from "../assets/logo.png";

import arrow from "../assets/arrow-icon.png";
import moon from "../assets/moon_icon.png";
import header from "../assets/header-bg-color.png";
import menu from "../assets/menu-black.png";
import blackk from "../assets/close-black.png";
import profile from "../assets/profile-img.png";
import hand from "../assets/hand-icon.png";
import white from "../assets/right-arrow-white.png";
import download from "../assets/download-icon.png";
import user from "../assets/user-image.png";
import code from "../assets/code-icon.png";
import edu from "../assets/edu-icon.png";
import project from "../assets/project-icon.png";
import vscode from "../assets/vscode.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import circular from "../assets/circular-text.png";
import dev from "../assets/male dev icon with laptop in png format.png";
import webicon from "../assets/web-icon.png";
import rightarr from "../assets/right-arrow.png";
import mobile from "../assets/mobile-icon.png";
import ui from "../assets/ui-icon.png";
import graphics from "../assets/graphics-icon.png";
import work from "../assets/work-1.png";
import send from "../assets/send-icon.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";
import rabold from "../assets/right-arrow-bold.png";
import footer from "../assets/footer-bg-color.png";
import rawhite from "../assets/right-arrow-white.png";
import mail from "../assets/mail_icon.png";
import ppic from "../assets/profile-pic (1).png";
import jeralin from "../assets/Screenshot_20241105_213255_Chrome.jpg";
import jerl from "../assets/rjer.png";
import resume from "../assets/Resume1.jpg";

const Indexx = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   const sideMenu = document.querySelector("#sideMenu");
  //   const openMenu = () => {
  //     sideMenu.style.transform = "translateX(-16rem)";
  //   };

  //   const closeMenu = () => {
  //     sideMenu.style.transform = "translateX(16rem)";
  //   };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Sets the state to close the menu
  };

  // window.addEventListener('scroll', ()=>{
  //   if(scrollY > 50) {
  //     navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')

  //   }else{
  //     navBar.classList.remove(
  //       "bg-white",
  //       "bg-opacity-50",
  //       "backdrop-blur-lg",
  //       "shadow-sm"
  //     );

  //   }
  // })

  // light mode and dark mode

  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  return (
    <div className="overflow-x-hidden scroll-smooth font-Outfi leading-8 ">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src={header} alt="" className="w-full" />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <img
          src={jeralin}
          alt=""
          className="w-20 cursor-pointer mr-14 opacity-40 rounded-full "
        />
        {/* <h1 className={"w-96 cursor-pointer mr-14 font-Ovo hidden "}>Jeralin</h1> */}
        <ul className=" hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button onClick={toggleTheme}>
            <img src={moon} alt="" className="w-6" />
          </button> */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact <img src={arrow} alt="" className="w-3" />
          </a>
          {/* chatgpt */}

          <div
            style={{
              transform: isMenuOpen
                ? "translateX(-12rem)"
                : "translateX(42rem)",
              transition: "transform 0.3s ease",
              position: "absolute",
              // additional styling for the sidebar
            }}
          >
            <ul
              id="sideMenu"
              className={` md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 font-Ovo
          ${isMenuOpen ? "translate-x-0" : "-translate-x-64"}`}
            >
              <div className="absolute right-6 top-6" onClick={closeMenu}>
                <img src={blackk} alt="" className="w-5 cursor-pointer" />
              </div>

              <li>
                <a href="#top" onClick={closeMenu}>
                  Home
                </a>
                {/* <Link
                  to="top"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closeMenu}
                >
                  Home
                </Link> */}
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About me
                </a>
                {/* <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer"
                >
                  About me
                </Link> */}
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={closeMenu}>
                  My Work
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact me
                </a>
              </li>
            </ul>
          </div>

          {/* chatpt */}

          <button className="block md:hidden ml-3 " onClick={openMenu}>
            <img src={menu} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}

        {/* <ul
          id="sideMenu"
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img src={blackk} alt="" className="w-5 cursor-pointer" />
          </div>

          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul> */}
      </nav>

      {/* header */}
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img src={ppic} alt="" className="rounded-full w-32 " />
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi i'm Jeralin Moses <img src={hand} alt="" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          MERN Stack developer
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
          I am a MERN Stack Developer with a passion for crafting efficient,
          scalable, and user-friendly applications. I am work with both backend
          and frontend technologies, leveraging the power of the MongoDB,
          Express, React, and Node.js ecosystem to deliver seamless solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7020] text-white flex items-center gap-2 "
          >
            contact me <img src={white} alt="" className="w-4" />
          </a>

          {/* <a
            href={resume}
            download
            className="px-10 py-3 border rounded-full border-gray-500  flex items-center gap-2 bg-white"
          >
            my resume <img src={download} alt="" className="w-4" />
          </a> */}
        </div>
      </div>

      {/* about me */}

      <div id="about" className="w-full px-[12%] py-10 scroll-mt-16">
        <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-Ovo">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
          <div className="max-w-max mx-auto relative">
            <img
              src={jerl}
              alt=""
              className="w-64 sm:w-80 rounded-3xl max-w-none border "
            />
            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
              {/* <img src={circular} alt="" className="w-full animate-spin_slow" /> */}
              <img
                src={dev}
                alt=""
                className="w-2/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              I am an enthusiastic MERN Stack Developer eager to bring fresh
              ideas and creative solutions to the digital world. Skilled in
              HTML, CSS, JavaScript, React, MongoDB, Express, NodeJS and
              responsive design principles, with hands-on experience and
              user-friendly websites. Passionate about staying up-to-date with
              the latest web development trends and ready to collaborate, learn,
              and grow in a dynamic team environment.Let’s create something
              amazing together!
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-auto gap-6 max-w-2xl">
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src={code} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">
                  Languages & Technologies
                </h3>
                <p className="text-gray-600 text-sm">
                  HTML, CSS, Javascript, React Js, MongoDB, ExpressJs, NodeJs.
                </p>
              </li>

              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src={edu} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">
                  Certifications
                </h3>
                <p className="text-gray-600 text-sm">
                  1. Sristhi Innovative Certified MERN Stack Developer. <br />{" "}
                  <br />
                  2. Node.js (Certified – Simplilearn). <br /> <br />{" "}
                  3.Express.js (Certified – Simplilearn). <br /> <br /> 4.
                  Javascript(Certified – Great Learning).
                </p>
              </li>

              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                <img src={project} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Projects </h3>

                <p className="text-gray-600 text-sm">
                  1. Built Responsive Portfolio Website. <br /> <br /> 2. Crypro
                  Trading Platform. <br /> <br />
                  3. NetflixClone.
                </p>
              </li>
            </ul>
            {/* <h4 className="my-6 text-gray-700 font-Ovo">Tools i use</h4> */}
            {/* <ul className="flex items-center gap-3 sm:gap-5">
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
                <img src={vscode} alt="" className="w-5 sm:w-7" />
              </li>

              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
                <img src={firebase} alt="" className="w-5 sm:w-7" />
              </li>

              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
                <img src={git} alt="" className="w-5 sm:w-7" />
              </li>
            </ul> */}
            {/* <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
                <img src={vscode} alt="" className="w-5 sm:w-7" />
              </li>

              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
                <img src={vscode} alt="" className="w-5 sm:w-7" />
              </li> */}
          </div>
        </div>
      </div>

      {/* services */}

      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          My services are Website and Application UI Development using HTML,
          CSS, JavaScript, MongoDB, ExpressJs, NodeJs and ReactJs, Conversion of
          Design Files into Code, Responsive Design, Full-Stack Web Application
          Development, Custom Frontend Development, Backend Development &
          Database Design, Authentication & Authorization.
        </p>
        <div className="grid grid-cols-auto gap-6 my-10">
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            {/* <img src={webicon} alt="" className="w-10" /> */}
            <h3 className="text-lg my-4 text-gray-700">
              Full-Stack Web Application Development
            </h3>
            <p className="text-sm text-gray-700 leading-5">
              End-to-end development of modern, responsive, and scalable web
              applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            {/* <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more <img src={rightarr} alt="" className="w-4" />
            </a> */}
          </div>

          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            {/* <img src={mobile} alt="" className="w-10" /> */}
            <h3 className="text-lg my-4 text-gray-700">
              Custom Frontend Development
            </h3>
            <p className="text-sm text-gray-700 leading-5">
              Building dynamic, user-friendly interfaces using React.js with
              reusable components and responsive design.
            </p>
            {/* <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more <img src={rightarr} alt="" className="w-4" />
            </a> */}
          </div>

          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            {/* <img src={ui} alt="" className="w-10" /> */}
            <h3 className="text-lg my-4 text-gray-700">
              Backend Development & Database Design
            </h3>
            <p className="text-sm text-gray-700 leading-5">
              Creating robust server-side logic and managing databases using
              MongoDB.
            </p>
            {/* <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more <img src={rightarr} alt="" className="w-4" />
            </a> */}
          </div>

          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            {/* <img src={graphics} alt="" className="w-10" /> */}
            <h3 className="text-lg my-4 text-gray-700">
              Authentication & Authorization
            </h3>
            <p className="text-sm text-gray-700 leading-5">
              Implementing secure login systems.
            </p>
            {/* <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more <img src={rightarr} alt="" className="w-4" />
            </a> */}
          </div>
        </div>
      </div>

      {/* my work */}
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Welcome to my web development portfolio!
        </p>
        <div className="grid grid-cols-auto my-10 gap-5">
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{ backgroundImage: `url(${work})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Netflix Clone</h2>
                {/* <p className="text-sm text-gray-700">Web Design</p> */}
              </div>
              {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send} alt="" className="w-5" />
              </div> */}
            </div>
          </div>

          {/* <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{ backgroundImage: `url(${work2})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Geo based app</h2>
                <p className="text-sm text-gray-700">mobile app</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send} alt="" className="w-5" />
              </div>
            </div>
          </div> */}

          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{ backgroundImage: `url(${work3})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Portfolio site</h2>
                {/* <p className="text-sm text-gray-700">Web Design</p> */}
              </div>
              {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send} alt="" className="w-5" />
              </div> */}
            </div>
          </div>

          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{ backgroundImage: `url(${work4})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">Crypro Trading Platform</h2>
                {/* <p className="text-sm text-gray-700">UI/UX design</p> */}
              </div>
              {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send} alt="" className="w-5" />
              </div> */}
            </div>
          </div>
        </div>

        {/* <a
          href="#"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
        >
          Show more <img src={rabold} alt="" className="w-4" />
        </a> */}
      </div>

      {/* contact */}

      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
        <form
          method="POST"
          action="https://api.web3forms.com/submit"
          className="max-w-2xl mx-auto"
        >
          <input
            type="hidden"
            name="access_key"
            value="da17664f-eade-4545-8762-8ecab513f186"
          />

          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              required
              name="email"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
            required
            name="message"
          ></textarea>
          <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
            Submit now <img src={rawhite} alt="" className="w-4" />
          </button>
        </form>
      </div>
      {/* Footer */}

      <div className="mt-20">
        <div className="text-center">
          <img
            src={jeralin}
            alt=""
            className="w-36 mx-auto mb-2 rounded-full"
          />
          <div className="w-max flex items-center gap-2 mx-auto">
            <img src={mail} alt="" className="w-6" />
            jeralinjeralin@gmail.com
          </div>
          {/* <h1>jeralin</h1> */}
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>© 2025 Jeralin. All rights reserved.</p>
          {/* <ul>
            <li></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Indexx;
