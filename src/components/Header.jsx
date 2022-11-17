import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { manager, admin, worker } from '../util/menu';
import Logo from './../assets/UpSend-nobg.png';

const Header = () => {
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');
  let menu = [];
  const navigate = useNavigate();

  if (role === 'admin') {
    menu = admin;
  } else if (role === 'manager') {
    menu = manager;
  } else if (role === 'worker') {
    menu = worker;
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <img className="object-cover object-center rounded transform scale-x-140" alt="hero" src={Logo} width="60px"  />
          <span className="ml-3 text-xl">UpSend</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {menu.map((item) => (
            <Link to={item.link} key={item.title} className="mr-5 hover:text-gray-900">
              {item.title}
            </Link>
          ))}
        </nav>
        {token ? (
          <button
            onClick={() => {
              localStorage.clear();
              navigate('/');
            }}
            className="inline-flex items-center bg-[#24695C] border-0 py-2 px-4 focus:outline-none text-white  rounded text-base mt-4 md:mt-0"
          >
            Sign Out

          </button>
        ) : (
          <Link to="/login">
            <button className="inline-flex items-center bg-[#24695C] border-0 py-2 px-4 focus:outline-none text-white  rounded text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
