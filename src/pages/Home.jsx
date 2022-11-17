import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import HomeImage from './../assets/cloud.webp';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-gray-900 max-w-[750px]">
              Save and secure your files and messages on our platform
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt dolor nesciunt consectetur perspiciatis
              quia saepe delectus ab et beatae.
            </p>
            <div className="flex justify-center">
              {
                <Link to="/login">
                  <button className="inline-flex items-center bg-[#24695C] border-0 py-2 px-4 focus:outline-none text-white  rounded text-base md:mt-0">
                    Log In
                  </button>
                </Link>
              }
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-fill object-center rounded transform hover:object-top" alt="hero" src={HomeImage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
