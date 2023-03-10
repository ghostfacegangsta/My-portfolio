import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-red-900">
            I'm a Computer science undergraduate
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
        
            I have a passion to learn new technologies & to build things that live on the internet, whether that be a web app, a mobile app, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. 
         
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black font-bold w-fit px-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/5 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
