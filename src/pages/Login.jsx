import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginImage from './../assets/Login3.webp';
import Header from '../components/Header';

const Login = () => {
  const roles = ['manager', 'worker', 'admin'];

  const [user, setUser] = useState({ username: '', password: '', role: roles[2] });
  const [error, setError] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setButtonStatus(true);
    setError('');

    try {
      const data = await axios.post(user.role !== 'admin' ? 'user/login' : 'admin/login', user);
      setButtonStatus(false);

      localStorage.setItem('token', data.data.token);
      localStorage.setItem('role', data.data.role);

      if (user.role === 'manager') {
        navigate('/manager/dashboard');
      } else if (user.role === 'worker') {
        navigate('/worker/dashboard');
      } else {
        navigate('/admin/dashboard');
      }

      setUser({});
    } catch (err) {
      setError(err.response.data.message);
      setButtonStatus(false);
    }
  };

  return (
    <div>
        <Header />
        <div class="grid grid-cols-2 gap-4"> 
          <div>
            <section className="text-gray-600 body-font h-[calc(100vh-80px)] flex items-center">      
              <div className="container px-5 mx-auto flex flex-wrap items-center justify-center w-1/5 lg:w-1/2 md:w-3/4 w-full">
                <div className="border-emerald-500  border-2 rounded-xl p-16 flex flex-col ml-auto w-full mt-10 md:mt-0">
                  <h2 className="text-emerald-900 text-2xl font-medium title-font mb-5 text-center">Log In</h2>
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <div className="relative mb-4">
                    <label htmlFor="username" className="leading-7 text-sm text-gray-600">
                      Username
                    </label>
                    <input
                      value={user.username}
                      onChange={(e) => setUser({ ...user, username: e.target.value })}
                      required
                      type="text"
                      id="username"
                      name="username"
                      className="w-full bg-white rounded border border-teal-900 focus:border-teal-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-600 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      required
                      type="password"
                      id="password"
                      name="password"
                      className="w-full bg-white rounded border border-teal-900 focus:border-teal-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex my-4">
                      <div className="form-check mr-5">
                        <input
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#24695C] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={roles[0]}
                          onChange={(e) => setUser({ ...user, role: e.target.value })}
                        />
                        <label
                          className="form-check-label inline-block text-gray-600 cursor-pointer"
                          htmlFor="flexRadioDefault1"
                        >
                          Manager
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#24695C] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value={roles[1]}
                          onChange={(e) => setUser({ ...user, role: e.target.value })}
                        />
                        <label
                          className="form-check-label inline-block text-gray-600 cursor-pointer"
                          htmlFor="flexRadioDefault2"
                        >
                          Worker
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-white bg-[#24695C] border-0 py-2  my-2 focus:outline-none  rounded text-lg"
                    onClick={login}
                    disabled={buttonStatus}
                  >
                    {buttonStatus ? 'Please Wait' : 'Login'}
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="text-gray-600 body-font h-[calc(100vh-80px)] flex items-center">      
            <img className="object-fill object-center rounded transform hover:object-top" alt="hero" src={LoginImage} />
            </section>
          </div>
        </div>
    </div>
    
  );
};

export default Login;
