import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import CTAImage from './../assets/msg.jpg';

const ManagerMessage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const token = localStorage.getItem('token');

  const saveMessage = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    try {
      await axios.post(
        '/message/manager',
        { message },
        {
          headers: {
            token: token,
          },
        }
      );   toast.success("Message Sent Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setButtonStatus(false);
      setMessage('');
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }
  };
  return (
    <div>
      <Header />
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form>
          <label
                for="message"
                class="sm:text-5xl text-3xl mb-4 font-bold max-w-[750px] text-[#24695C]"
              >
                Message Center
              </label>
              <br/><div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <br/><img className="object-cover object-center rounded transform -scale-x-100" alt="hero" src={CTAImage} />
          </div>
            <div class="mb-5">
            <br/><label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Submit Your Message
              </label>
              <textarea
                rows="4"
                type="text"
                id="message"
                name="message"
                value={message}
                placeholder="Enter your message"
                class="w-full resize-none rounded-md border border-[#24695C] bg-white py-3 px-6 
                text-base font-medium text-[#24695C] outline-none focus:border-[#24695C] focus:shadow-md"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            
            <div>
              <button class="hover:shadow-form w-full rounded-md bg-[#24695C] py-3 px-8 text-center text-base font-semibold text-white outline-none">

                <span
                  class="relative text-white group-hover:text-white"
                  onClick={saveMessage}
                  disabled={buttonStatus}
                >
                  {buttonStatus ? "Message Sending..." : "Submit"}
                </span>
              </button>
            </div>
            
          </form>
        </div>
      </div>
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ManagerMessage;
