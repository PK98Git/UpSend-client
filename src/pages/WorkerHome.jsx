import React from "react";
import { Link } from "react-router-dom";
import SaveImage from './../assets/SaveMSG.jpg';
const WorkerHome = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 ">
                <div>
                  <section className="text-gray-600 body-font flex items-center ">      
                  <img className="object-fill object-center rounded transform hover:object-top" alt="hero" src={SaveImage} />
                  </section>
                </div>
                <div class="flex-center">
                  <Link
                    to="/worker/message"
                    className="mt-6 sm:text-5xl text-3xl mb-4 font-bold text-teal-500 inline-flex items-center "
                  >
                    Save Message

                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
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

export default WorkerHome;
