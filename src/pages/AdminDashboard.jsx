import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import VectorImageMsg from './../assets/user.jpg';
import VectorImage from './../assets/user2.jpg';

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font pt-10">
        <div className="container px-5 mx-auto py-2 flex flex-wrap items-center justify-center">
          <div className="flex justify-between -m-4">
            <div className="p-4 lg:w-3/4 md:w-full">
              <Link to="/admin/register">
                <div className="flex border-2 rounded-lg hover:bg-slate-100 border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col items-center justify-between">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded transform -scale-x-80" alt="hero" src={VectorImageMsg} />
          </div>
                  <div className="">
                    <div className="sm:text-4xl mt-3 text-[#24695C] inline-flex items-center">
                      Add New User
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4 lg:w-3/4 md:w-full">
              <Link to="/admin/users">
                <div className="flex border-2 rounded-lg hover:bg-slate-100 border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col items-center justify-between">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded transform -scale-x-100" alt="hero" src={VectorImage} />
          </div>
                  <div className="">
                    <div className="sm:text-4xl mt-3 text-[#24695C] inline-flex items-center">
                      View Users
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
