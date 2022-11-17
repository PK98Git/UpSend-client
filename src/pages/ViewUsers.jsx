import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('/user', {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Registered Users</h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Username
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Role
                  </th>
                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {users?.length > 0 ? (
                  users.map((user) => (
                    <tr>
                      <td class="px-4 py-3">{user.name}</td>
                      <td class="px-4 py-3">{user.username}</td>
                      {user.role === 'worker' ? (
                        <td class="px-4 py-3">
                          <span class="bg-blue-100 px-2 py-1 text-blue-800 text-sm font-medium mr-2 mt-2 rounded dark:bg-blue-200 dark:text-blue-800">
                            {user.role.toUpperCase()}
                          </span>
                        </td>
                      ) : (
                        <td class="px-4 py-3">
                          <span class="bg-red-100 px-2 py-1 text-red-800 text-sm font-medium mr-2 mt-2 rounded dark:bg-red-200 dark:text-red-900">
                            {user.role.toUpperCase()}
                          </span>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <p className="text-red-500 text-sm text-center pt-4 inline-block">No users found</p>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewUsers;
