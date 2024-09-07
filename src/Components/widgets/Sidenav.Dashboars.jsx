import React from 'react';
import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Sidebar({ active, setActive, isSidebarOpen }) {
  return (
    <div
      className={`fixed top-0 ml-5 mt-5 w-72 border-2 border-gray-300 h-[95%] bg-white shadow-sm rounded-xl p-4 transform transition-transform duration-500 ${
        isSidebarOpen ? 'translate-x-2' : '-translate-x-96 lg:translate-x-0'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="p-4 font-semibold text-4xl lg:text-center">SkillIt
      <div className="lg:hidden flex float-right">
          <UserCircleIcon className="h-12 w-12 text-gray-600" />
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
