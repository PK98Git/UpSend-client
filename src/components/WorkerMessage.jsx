import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import SendMsgImage from './../assets/SendMSG2.jpg';
const WorkerMessage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const token = localStorage.getItem("token");

  const saveMessage = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    try {
      await axios.post('/message/worker', {message}, {
        headers: {
          token: token,
        },
      }); toast.success("Saved Message successfully!", {
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
      setMessage("");
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }
  };
  return (
    <div>
      <Header />
      <div class="grid grid-cols-2 gap-4 flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
            <section className="text-gray-600 body-font flex items-center">      
            <img className="object-fill object-center rounded " alt="hero" src={SendMsgImage} />
            </section>
        </div>
        <div class="mx-auto w-full max-w-[550px]">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-lg font-bold "
              >
                Message
              </label>
              <textarea
                rows="7"
                type="text"
                id="message"
                name="message"
                value={message}
                placeholder="Please type your message in the box"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                text-base font-medium text-[#6B7280] outline-none focus:border-[#24695C] "
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button class="group relative h-12 w-40 overflow-hidden rounded-lg bg-[#24695C] text-lg shadow">
                <div class="absolute inset-0 w-3 "></div>
                <span
                  class="relative text-white "
                  onClick={saveMessage}
                  disabled={buttonStatus}
                >
                  {buttonStatus ? "Please Wait.." : "Save"}
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

export default WorkerMessage;
