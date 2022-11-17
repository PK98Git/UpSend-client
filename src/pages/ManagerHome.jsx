import React from 'react';
import { Link } from 'react-router-dom';
import VectorImageMsg from './../assets/msg.jpg';
import VectorImage from './../assets/file.jpg';

const ManagerHome = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded transform -scale-x-100" alt="hero" src={VectorImageMsg} />
          </div>
                <div class="flex-grow">
                  <Link
                    to="/manager/message"
                    class="sm:text-4xl mt-3 text-[#24695C] inline-flex items-center"
                  >
                    Send Messages
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded transform -scale-x-100" alt="hero" src={VectorImage} />
          </div>
                <div class="flex-grow">
                  <Link
                    to="/file-uploader"
                    class="sm:text-4xl mt-3 text-[#24695C] inline-flex items-center"
                  >
                    Upload Files
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerHome;

