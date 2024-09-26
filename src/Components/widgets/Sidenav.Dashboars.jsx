import React, { useState } from 'react';
import { UserCircleIcon, PencilSquareIcon, ArrowRightOnRectangleIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
function Sidebar({ active, setActive, isSidebarOpen }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.clear(); // Clear all items from local storage
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div
      className={`fixed top-0 ml-5 mt-5 w-72 border-2 border-gray-200 h-[95%] bg-white shadow-md rounded-xl p-4 transform transition-transform duration-500 ${
        isSidebarOpen ? 'translate-x-2' : '-translate-x-96 lg:translate-x-0'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="p-4 font-semibold lg:text-4xl lg:text-center sm:text-2xl">Hire-Bridge
        <div className="lg:hidden flex float-right relative">
          <UserCircleIcon
            className="h-12 w-12 text-gray-600 cursor-pointer"
            onClick={toggleDropdown}
          />
          <div
            className={`absolute top-14 right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 translate-y-0 z-50' : 'opacity-0 translate-y-2 z-0 pointer-events-none'
            }`}
          >
            <ul className="py-2">
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base">
                <PencilSquareIcon className="h-5 w-5 text-gray-600 mr-2" />
                <Link to='/Studentsignup'>Edit Profile</Link>
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base">
                <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600 mr-2" />
                <button onClick={handleLogout} className="text-red-600 mr-2">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="mt-8">
        <li className="mb-4">
          <a
            href="#"
            className={`flex items-center p-3 space-x-3 ${
              active === 'students'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-black'
            } rounded-md`}
            onClick={() => setActive('students')}
          >
            <HomeIcon className="h-6 w-6" />
            <span>Students</span>
          </a>
        </li>
        <li className="mb-4">
          <a
            href="#"
            className={`flex items-center p-3 space-x-3 ${
              active === 'placements'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-black'
            } rounded-md`}
            onClick={() => setActive('placements')}
          >
            <UserCircleIcon className="h-6 w-6" />
            <span>Placements</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
